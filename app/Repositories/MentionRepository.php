<?php

namespace App\Repositories;

use App\Models\User;
use App\Models\Mention;
use App\Notifications\YouWereMentioned;
use Illuminate\Support\Facades\Notification;

class MentionRepository
{
    /**
     * @var mixed
     */
    protected $model;

    /**
     * @param Mention $mention
     */
    public function __construct(Mention $mention)
    {
        $this->model = $mention;
    }

    /**
     * @param  mixed $data
     * @param  mixed $mentionableType
     * @param  mixed $mentionableId
     * @return mixed
     */
    public function create($mentionableType, $mentionable)
    {
        $data = [];
        $now = now();
        foreach (request('mentions') as  $username) {
            $data[] = [
                'username'         => $username,
                'mentionable_type' => $mentionableType,
                'mentionable_id'   => $mentionable->id,
                'created_at'       => $now,
                'updated_at'       => $now,
            ];
        }

        $mentioned = $this->model->insert($data);

        if ($mentioned) {
            Notification::send(
                User::whereIn('username', request('mentions'))->get(),
                new YouWereMentioned($mentionableType, $mentionable)
            );

            return true;
        }

        return false;
    }
}
