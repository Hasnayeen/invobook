<?php

namespace App\Utilities;

use GuzzleHttp\Client;
use App\Models\Service;

/**
 * Expose methods to interact with Github GraphQL API.
 */
trait GithubTrait
{
    private function getAccessToken()
    {
        return Service::where('name', 'github')->first()->access_token;
    }

    private function getUserRepos()
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
            'headers' => ['Authorization' => 'bearer ' . decrypt($this->getAccessToken())],
            'json'    => [
                'query' => $query,
            ],
        ]);

        return json_decode($res->getBody()->getContents());
    }
}
