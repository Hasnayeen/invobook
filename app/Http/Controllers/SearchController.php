<?php

namespace App\Http\Controllers;

use App\Models\Search;

class SearchController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        $search = new Search();

        $results = $search->search(request('query'))
                          ->paginate(7)
                          ->load('huntable')
                          ->filter(function ($result) use ($user) {
                              if (in_array($result->huntable_type, ['project', 'office', 'team'])) {
                                  return $user->hasPermissionTo("view {$result->huntable_type}->{$result->huntable->id}");
                              }

                              $type = $result->huntable_type . 'able';

                              return $user->hasPermissionTo("view {$result->huntable[$type.'_type']}->{$result->huntable[$type.'_id']}");
                          })
                          ->map(function ($result) {
                              $data['name'] = $result->name;
                              $data['description'] = $result->description;
                              $data['type'] = "{$result->huntable_type}s";

                              if (in_array($result->huntable_type, ['project', 'office', 'team'])) {
                                  $data['url'] = "/{$result->huntable_type}s/{$result->huntable->id}";

                                  return $data;
                              }

                              $type = $result->huntable_type . 'able_type';
                              $id = $result->huntable_type . 'able_id';

                              $data['url'] = "/{$result->huntable[$type]}s/{$result->huntable[$id]}?tool={$result->huntable_type}s";

                              return $data;
                          });

        return response()->json($results);
    }
}
