<?php

namespace App\Actions;

use App\Models\Invoice;
use Filament\Facades\Filament;

class CreateInvoice
{
    public static function run(\LaravelDaily\Invoices\Invoice $data, $buyer)
    {
        $invoice = Invoice::create([
            'client_id' => $data->getCustomData()['client_id'],
            'summary' => $data->notes,
            'subtotal_in_cents' => $data->taxable_amount * 100,
            'vat_in_cents' => $data->total_taxes * 100,
            'total_in_cents' => $data->total_amount * 100,
            'start' => $data->getCustomData()['from'],
            'end' => $data->getCustomData()['to'],
            'user_id' => auth()->user()->id,
            'team_id' => Filament::getTenant()->id,
        ]);

        $invoice->items()->createMany(
            $data->items->map(fn ($item) => [
                'description' => $item->title,
                'duration_in_seconds' => $item->totalDuration,
                'amount_in_cents' => $item->sub_total_price * 100,
                'task_id' => $item->taskId,
                'project_id' => $item->projectId,
                'invoice_id' => $invoice->id,
            ])->toArray()
        );

        return $invoice;
    }
}
