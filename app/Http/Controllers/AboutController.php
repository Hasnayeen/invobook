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
            $result = $latestVersion > config('about.version');
            if ($result) {
                config(['key' => $latestVersion]);

                return response()->json([
                    'status'           => 'success',
                    'message'          => 'New version ' . $latestVersion . ' is available.',
                    'update_available' => $result,
                ]);
            }

            return response()->json([
                    'status'           => 'success',
                    'message'          => 'Version ' . config('about.version') . ' is the latest version.',
                    'update_available' => $result,
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
