<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;

class AboutController extends Controller
{
    public function checkForUpdate()
    {
        $client = new Client();
        $response = $client->request('GET', 'https://repo.packagist.org/p/iluminar/goodwork.json', ['Accept' => 'application/json']);

        if ($response->getStatusCode() === 200) {
            $latestVersion = $this->getLatestVersion($response);
            if ($latestVersion > about('current_version')) {
                about('latest_version', $latestVersion);

                return response()->json([
                    'status'           => 'success',
                    'message'          => 'New version ' . $latestVersion . ' is available. Please update.',
                ]);
            }

            return response()->json([
                    'status'           => 'success',
                    'message'          => 'Version ' . about('current_version') . ' is the latest version.',
                ]);
        }

        return response()->json([
                'status'  => 'error',
                'message' => "Couldn't check for updates at this moment.",
            ]);
    }

    private function getLatestVersion($response)
    {
        return collect(json_decode($response->getBody()->getContents(), 1)['packages']['iluminar/goodwork'])->keys()->transform(function ($item) {
            return (float) preg_replace('/v(\d.\d.?\d?)/', '${1}', $item);
        })->max();
    }
}
