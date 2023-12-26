<?php

namespace App\Filament\App\Resources\InvoiceResource\Pages;

use App\Filament\App\Resources\InvoiceResource;
use App\Models\Invoice;
use App\Models\WorkSession;
use Carbon\Carbon;
use Filament\Facades\Filament;
use Filament\Resources\Pages\Page;
use Filament\Tables\Concerns\InteractsWithTable;
use Filament\Tables\Contracts\HasTable;
use Filament\Tables\Table;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Str;

class InvoiceTemplatePreview extends Page implements HasTable
{
    use InteractsWithTable;

    protected static string $resource = InvoiceResource::class;

    public string $template = '';
    public $invoice;

    public function mount($template)
    {
        $this->template = $template;
        $this->invoice = Invoice::find(request()->query('invoice'));
    }

    public static function getRouteName(?string $panel = null): string
    {
        return 'filament.' . Filament::getCurrentPanel()->getId() . '.resources.' . static::getResource()::getSlug() . '.preview';
    }

    public function table(Table $table): Table
    {
        return GenerateInvoice::table($table)
            ->query(
                WorkSession::query()
                    ->whereBetween('start', [$this->invoice->start, Carbon::parse($this->invoice->end)->addDay()])
                    ->selectWorkSessions()
                    ->withSubtotal()
                    ->withTotalDuration()
            )
            ->paginated(false)
            ->filters([])
            ->headerActions([]);
    }

    public function client()
    {

    }

    public function getTemplateName(): string
    {
        return Str::title($this->template);
    }

    public function render(): View
    {
        return view('vendor.invoices.templates.' . $this->template, $this->getViewData())
            ->layout('components.layouts.invoice', ['preview' => true]);
    }
}
