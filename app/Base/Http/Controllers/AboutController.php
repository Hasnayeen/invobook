<?php

namespace App\Base\Http\Controllers;

use GuzzleHttp\Client;

class AboutController extends Controller
{
    public function checkForUpdate()
    {
        $client = new Client();
        $response = $client->request('GET', 'https://repo.packagist.org/p/iluminar/goodwork.json', ['Accept' => 'application/json']);

        if ($response->getStatusCode() === 200) {
            $latestVersion = $this->getLatestVersion($response);
            if ($latestVersion > config('app.version')) {
                return response()->json([
                    'status'           => 'success',
                    'message'          => localize('misc.New version available', ['latest_version' => $latestVersion]),
                ]);
            }

            return response()->json([
                'status'           => 'success',
                'message'          => localize('misc.Current version is the latest version', ['current_version' => config('app.version')]),
            ]);
        }

        return response()->json([
            'status'  => 'error',
            'message' => localize('misc.Couldn\'t check for updates at this moment.'),
        ]);
    }

    private function getLatestVersion($response)
    {
        return collect(json_decode($response->getBody()->getContents(), 1)['packages']['iluminar/goodwork'])->keys()->transform(function ($item) {
            return (float) preg_replace('/v(\d.\d.?\d?)/', '${1}', $item);
        })->max();
    }
}
