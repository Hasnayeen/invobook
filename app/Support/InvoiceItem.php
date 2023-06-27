<?php

namespace App\Support;

use LaravelDaily\Invoices\Classes\InvoiceItem as BaseInvoiceItem;

class InvoiceItem extends BaseInvoiceItem
{
    public string $hours;
    public string $project;

    public function project(string $project): self
    {
        $this->project = $project;

        return $this;
    }

    public function hours(string $hours): self
    {
        $this->hours = $hours;

        return $this;
    }
}
