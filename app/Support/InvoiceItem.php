<?php

namespace App\Support;

use LaravelDaily\Invoices\Classes\InvoiceItem as BaseInvoiceItem;

class InvoiceItem extends BaseInvoiceItem
{
    public string $hours;
    public ?string $project;
    public ?string $projectId;
    public ?string $taskId;
    public ?int $totalDuration;

    public function totalDuration(?int $totalDuration): self
    {
        $this->totalDuration = $totalDuration;

        return $this;
    }

    public function project(?string $project, ?string $projectId): self
    {
        $this->project = $project;
        $this->projectId = $projectId;

        return $this;
    }

    public function task(?string $task): self
    {
        $this->taskId = $task;

        return $this;
    }

    public function hours(string $hours): self
    {
        $this->hours = $hours;

        return $this;
    }
}
