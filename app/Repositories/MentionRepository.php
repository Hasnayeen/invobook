<?php

namespace App\Repositories;

use App\Models\Mention;

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
    public function create($mentionableType, $mentionableId)
    {
        $data = [];
        $now = now();
        foreach (request('mentions') as  $username) {
            $data[] = [
                'username'         => $username,
                'mentionable_type' => $mentionableType,
                'mentionable_id'   => $mentionableId,
                'created_at'       => $now,
                'updated_at'       => $now,
            ];
        }

        return $this->model->insert($data);
    }
}
