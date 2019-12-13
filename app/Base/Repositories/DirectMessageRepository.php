<?php

namespace App\Base\Repositories;

use App\Base\Models\DirectMessage;

class DirectMessageRepository
{
    /**
     * @var mixed
     */
    protected $model;

    /**
     * @param DirectMessage $message
     */
    public function __construct(DirectMessage $message)
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
            'body'           => $data['body'],
            'sender_id'      => auth()->user()->id,
            'receiver_id'    => $data['receiver_id'],
            'attachment_id'  => $data['attachment_id'] ?? null,
            'read_at'        => null,
        ]);
    }

    public function getAllDirectMessages($senderId, $recieverId)
    {
        return $this->model->where(['sender_id' => $senderId, 'receiver_id' => $recieverId])
                           ->orWhere(function ($query) use ($senderId, $recieverId) {
                               $query->where(['sender_id' => $recieverId, 'receiver_id' => $senderId]);
                           })
                           ->with('user')
                           ->orderBy('id', 'desc')
                           ->paginate(15);
    }
}
