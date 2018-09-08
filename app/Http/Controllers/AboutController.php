<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Config;

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
                $this->setConfig(['latest_version' => $latestVersion]);

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

    public function updateSoftware()
    {
        $latestVersion = config('about.latest_version');
        if (config('about.current_version') !== $latestVersion) {
            $output = shell_exec('git fetch --tags origin master:master');
            if (strpos($output, '[new tag]')) {
                shell_exec('git checkout v.' . $latestVersion);
                $this->setConfig([
                    'current_version' => $latestVersion,
                    'last_updated'    => Carbon::today()->toFormattedDateString(),
                ]);

                return response()->json([
                    'status'  => 'success',
                    'message' => 'Software updated to latest version',
                ]);
            }
        }

        return response()->json([
            'status'  => 'error',
            'message' => 'Nothing to update',
        ]);
    }

    private function setConfig($data)
    {
        $config = config('about');
        foreach ($data as $key => $value) {
            $config[$key] = $value;
        }
        $data = var_export($config, 1);

        return File::put(base_path() . '/config/about.php', "<?php\n return $data ;");
    }
}
