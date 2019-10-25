<?php

namespace Tests\Feature\IntegrationTest;

use App\Base\Exceptions\GithubTokenNotSet;
use App\Base\Utilities\GithubConnection;

class TestGithubConnection extends GithubConnection
{
    protected function getAccessToken()
    {
        $this->token = encrypt(env('GITHUB_TOKEN'));
        if (!$this->token) {
            throw new GithubTokenNotSet();
        }

        return $this->token;
    }
}
