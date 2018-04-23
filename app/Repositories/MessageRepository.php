<?php

namespace App\Repositories;

use App\Models\Message;

class MessageRepository
{
    /**
     * @var mixed
     */
    protected $model;

    /**
     * @param Team $team
     */
    public function __construct(Message $message)
    {
        $this->model = $message;
    }

    /**
     * @param  mixed $data
     * @return mixed
     */
    public function saveMessage($data)
    {
        return $this->model->create([
            'body'             => $data['message'],
            'user_id'          => $data['user_id'],
            'messageable_type' => $data['messageable_type'],
            'messageable_id'   => $data['messageable_id'],
        ]);
    }

    public function getAllMessages($type, $id)
    {
        return $this->model->where(['messageable_type' => $type, 'messageable_id' => $id])
                           ->with('user')
                           ->orderBy('id', 'desc')
                           ->take(15)
                           ->get();
    }
}
