<?php

namespace App\Base\Utilities;

use App\Base\Exceptions\GithubTokenNotSet;
use GuzzleHttp\Client;
use App\Base\Models\Service;

/**
 * Expose methods to interact with Github GraphQL API.
 */
class GithubConnection
{
    protected $token;

    protected function getAccessToken()
    {
        if ($this->token) {
            return $this->token;
        }

        $githubService = Service::where('name', 'github')->firstOrFail();
        $this->token = $githubService->access_token ?? null;

        if (!$this->token) {
            throw new GithubTokenNotSet();
        }

        return $this->token;
    }

    public function getUserRepos()
    {
        return $this->call('query {
                    viewer {
                        name
                        repositories(last: 20) {
                            nodes {
                                id
                                name
                            }
                        }
                    }
                }');
    }

    public function getRepoIssues($repositoryId)
    {
        return $this->call('query {
                      node(id: "' . $repositoryId . '") {
                          ... on Repository {
                              issues(last: 20) {
                                  nodes {
                                      id
                                      title
                                  }
                              }
                          }
                      }
                  }');
    }

    private function call($query)
    {
        $res = (new Client())
            ->request('POST', 'https://api.github.com/graphql', [
                'headers' => ['Authorization' => 'bearer ' . decrypt($this->getAccessToken())],
                'json' => ['query' => $query],
            ]);

        return json_decode($res->getBody()->getContents());
    }
}
