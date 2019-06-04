<?php

namespace App\Core\Utilities;

use GuzzleHttp\Client;
use App\Core\Models\Service;

/**
 * Expose methods to interact with Github GraphQL API.
 */
trait GithubTrait
{
    private function getAccessToken()
    {
        $githubService = Service::where('name', 'github')->first();

        return $githubService->access_token ?? null;
    }

    private function getUserRepos($token)
    {
        $client = new Client();
        $query = 'query {
                    viewer {
                        name
                        repositories(last: 20) {
                            nodes {
                                id
                                name
                            }
                        }
                    }
                }';
        $res = $client->request('POST', 'https://api.github.com/graphql', [
            'headers' => ['Authorization' => 'bearer ' . decrypt($token)],
            'json'    => [
                'query' => $query,
            ],
        ]);

        return json_decode($res->getBody()->getContents());
    }
}
