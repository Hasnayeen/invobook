<?php

namespace App\Actions;

use App\Models\Client;
use App\Models\WorkSession;
use App\Support\InvoiceItem;
use Carbon\Carbon;
use Illuminate\Support\Str;
use LaravelDaily\Invoices\Classes\Party;
use LaravelDaily\Invoices\Invoice;

class GenerateInvoicePdf
{
    public function __invoke(array $items, array $data, array $timePeriod): string
    {
        $invoice = Invoice::make('invoice')
            ->template('simple')
            ->series(Str::ulid())
            ->serialNumberFormat('{SERIES}')
            ->seller($this->getSeller())
            ->buyer($buyer = $this->getBuyer($data['client_id']))
            ->date(today())
            ->payUntilDays(3)
            ->currencySymbol('€')
            ->currencyCode('EUR')
            ->currencyFormat('{SYMBOL}{VALUE}')
            ->notes($data['notes'])
            ->addItems($this->getInvoiceItems($items))
            ->totalTaxes(0)
            ->setCustomData([
                'from' => Carbon::parse($timePeriod['from'])->toDateString(),
                'to' => Carbon::parse($timePeriod['to'])->toDateString(),
            ])
            ->filename('Invoice_' . Str::slug($buyer->name) . '_' . today()->format('Y-m-d'))
            ->save('public');

        return $invoice->url();
    }

    private function getInvoiceItems(array $items): array
    {
        return collect($items)
            ->transform(
                fn (WorkSession $item) => (new InvoiceItem)
                    ->title($item->item)
                    ->pricePerUnit($item->rate_in_cents / 100)
                    ->hours(gmdate('H:i', $item['total_duration']))
                    ->project($item['project']['name'])
                    ->subTotalPrice(round($item->subtotal, 0, PHP_ROUND_HALF_UP))
            )->toArray();
    }

    private function getSeller(): Party
    {
        $user = auth()->user();

        return new Party([
            'name' => $user->name,
            'email' => $user->email,
        ]);
    }

    private function getBuyer(string $clientId): Party
    {
        $client = Client::find($clientId);

        return new Party([
            'name' => $client->name,
            'email' => $client->email,
        ]);
    }
}
