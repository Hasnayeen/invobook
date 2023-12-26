<?php

namespace App\Actions;

use App\Enums\InvoiceResponseType;
use App\Filament\App\Resources\InvoiceResource\Pages\InvoiceTemplatePreview;
use App\Models\Client;
use App\Models\WorkSession;
use App\Support\InvoiceItem;
use Carbon\Carbon;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Str;
use LaravelDaily\Invoices\Classes\Party;
use LaravelDaily\Invoices\Invoice;
use Spatie\Browsershot\Browsershot;

class GenerateInvoicePdf
{
    public function __invoke(
        iterable $invoiceItems,
        array $data,
        array $timePeriod,
        InvoiceResponseType $resultType = InvoiceResponseType::URL,
    ): string | View | null
    {
        $invoice = Invoice::make('invoice')
            ->template($data['template'] ?? 'default')
            ->series(Str::ulid())
            ->serialNumberFormat('{SERIES}')
            ->seller($this->getSeller())
            ->buyer($buyer = $this->getBuyer($data['client_id']))
            ->date(today())
            ->payUntilDays(3)
            ->currencySymbol('€')
            ->currencyCode('EUR')
            ->currencyFormat('{SYMBOL}{VALUE}')
            ->notes($data['notes'] ?? '')
            ->addItems($this->getInvoiceItems($invoiceItems))
            ->totalTaxes($data['vat'] ?? 0)
            ->setCustomData([
                'from' => Carbon::parse($timePeriod['from'])->toDateString(),
                'to' => Carbon::parse($timePeriod['to'])->toDateString(),
                'client_id' => $data['client_id'],
            ])
            ->calculate();

        $invoiceModel = CreateInvoice::run($invoice, $buyer);
        
        $html = $invoice->toHtml();

        return match ($resultType) {
            InvoiceResponseType::URL => $this->generatePdf(InvoiceTemplatePreview::getUrl(['template' => $data['template'], 'invoice' => $invoiceModel->id])),
            InvoiceResponseType::HTML => $html,
        };
    }

    private function generatePdf(string $url): string
    {
        $filename = 'invoices/Invoice_example_' . now()->format('Y-m-d H:i') . '.pdf';
        Browsershot::url($url)
            ->setNodeBinary(config('invoices.node_binary'))
            ->setNpmBinary(config('invoices.npm_binary'))
            ->format('A4')
            ->setOption('newHeadless', true)
            ->showBackground()
            ->save(storage_path('app/public/' . $filename));

        return url($filename);
    }

    private function getInvoiceItems(iterable $items): array
    {
        return collect($items)
            ->transform(
                fn (WorkSession $item) => (new InvoiceItem)
                    ->title($item->item ?? 'N/A')
                    ->pricePerUnit($item->rate_in_cents / 100)
                    ->hours(gmdate('H:i', $item->total_duration))
                    ->project($item->project?->name, $item->project?->id)
                    ->task($item->task?->id)
                    ->totalDuration($item->total_duration)
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
            'address' => $client->address ?? null,
        ]);
    }
}
