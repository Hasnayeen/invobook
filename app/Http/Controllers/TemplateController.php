<?php

namespace App\Http\Controllers;

use App\Actions\GenerateInvoicePdf;
use App\Enums\InvoiceResponseType;
use App\Models\Client;
use App\Models\Project;
use App\Models\Team;
use App\Models\WorkSession;
use Filament\Facades\Filament;
use Illuminate\Support\Facades\DB;
use Throwable;

class TemplateController extends Controller
{
    /**
     * Return a preview of the invoice template.
     */
    public function __invoke(GenerateInvoicePdf $generateInvoicePdf, string $template = 'default')
    {
        DB::beginTransaction();
        $user = auth()->user();
        $team = Team::factory()
            ->for($user, 'owner')
            ->create();
        Filament::setTenant($team);
        WorkSession::factory()
            ->for($user, 'user')
            ->for($team, 'team')
            ->for(Project::factory()->for($team), 'project')
            ->count(5)
            ->create(['rate_in_cents' => 5000]);

        $items = WorkSession::query()
            ->with('project:id,name')
            ->select(
                'work_sessions.id',
                'work_sessions.project_id',
                'task_id',
                'work_sessions.description',
                'work_sessions.rate_in_cents',
                'work_sessions.start',
                DB::raw('SUM(duration) as total_duration'),
                DB::raw('ROUND(SUM(duration / 3600 * rate_in_cents / 100)) as subtotal'),
                DB::raw("COALESCE(tasks.title, work_sessions.description) as item"),
            )
            ->where('work_sessions.start', '>=', now()->subMonths(1)->toDateString())
            ->where('work_sessions.start', '<=', now()->toDateString())
            ->leftJoin('tasks', 'tasks.id', '=', 'work_sessions.task_id')
            ->groupBy('item')
            ->get();
        $data = [
            'client_id' => Client::factory()->for($team)->create()->id,
            'notes' => 'Some notes',
            'template' => $template,
        ];
        $timePeriod = [
            'from' => now()->subMonth()->toDateString(),
            'to' => now()->toDateString(),
        ];

        try {
            $html = $generateInvoicePdf($items, $data, $timePeriod, InvoiceResponseType::HTML);
        } catch (Throwable $th) {
            // throw $th;
        }
        DB::rollBack();

        return $html;
    }
}
