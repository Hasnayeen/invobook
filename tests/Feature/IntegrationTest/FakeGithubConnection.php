<?php

namespace Tests\Feature\IntegrationTest;

class FakeGithubConnection
{
    protected $token = 'token';

    protected function getAccessToken()
    {
        return $this->token;
    }

    public function getUserRepos()
    {
        return json_decode('
{
  "data": {
    "viewer": {
      "name": "John Doe",
      "repositories": {
        "nodes": [
          {
            "id": "ABCDEF",
            "name": "Alpha Beth"
          },
          {
            "id": "XYZWQ",
            "name": "Ex Why"
          }
        ]
      }
    }
  }
}', false);
    }

    public function getRepoIssues($id)
    {
        return json_decode('
{
  "data": {
    "node": {
      "issues": {
        "nodes": [
          {
            "id": "ISSUE",
            "title": "Test issue for testing"
          }
        ]
      }
    }
  }
}', false);
    }
}
