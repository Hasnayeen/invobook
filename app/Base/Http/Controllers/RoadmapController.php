<?php

namespace App\Base\Http\Controllers;

use App\Base\Models\Cycle;
use App\Discussion\Models\Discussion;

class RoadmapController extends Controller
{
    public function show(Cycle $cycle)
    {
        $cycles = Cycle::where('start_date', '>=', $cycle->start_date->toDateString())
                       ->orderBy('start_date')
                       ->limit(3)
                       ->get(['id', 'name', 'start_date', 'end_date']);
        $discussions = Discussion::whereIn('cycle_id', $cycles->pluck('id'))
                                 ->where([
                                     'discussionable_type' => request('group_type'),
                                     'discussionable_id'   => request('group_id'),
                                 ])
                                 ->get(['name', 'content', 'implemented', 'cycle_id'])
                                 ->groupBy('cycle_id');

        $discussions = $discussions->values()->mapWithKeys(function ($item, $index) use ($cycles) {
            $key = $cycles[$index]['start_date']->format('M j') . ' - ' . $cycles[$index]['end_date']->format('M j');

            return [$key => [
                'cycle_id' => $cycles[$index]->id,
                'name'     => $cycles[$index]->name,
                'items'    => $item,
            ]];
        });

        return response()->json([
            'status'  => 'success',
            'roadmap' => $discussions,
        ]);
    }
}
