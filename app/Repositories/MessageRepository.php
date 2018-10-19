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

    public function getAllDirectMessages($type, $senderId, $recieverId)
    {
        // return $this->model->where(['user_id' => $recieverId, 'messageable_id' => $senderId, 'messageable_type' => $type])
        return $this->model->where(['user_id' => $senderId, 'messageable_id' => $recieverId, 'messageable_type' => $type])
                           ->orWhere(function ($query) use ($type, $senderId, $recieverId) {
                               $query->where(['user_id' => $recieverId, 'messageable_id' => $senderId, 'messageable_type' => $type]);
                           })
                           ->with('user')
                           ->orderBy('id', 'desc')
                           ->take(15)
                           ->get();
    }
}
