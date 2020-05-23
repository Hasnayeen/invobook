<?php

namespace App\Base\Repositories;

use App\Base\Models\DirectMessage;

class UnreadDirectMessageRepository
{
    
   /**
     * @var mixed
     */
    protected $model;

    /**
     * @param DirectMessage $message
     */
    public function __construct(DirectMessage $directMessage)
    {
        $this->model = $directMessage;
    }

    public function getUnreadDirectMessagesForUser($recieverId)
    {
        return $this->model->where('receiver_id', $recieverId)->whereNull('read_at')->get('updated_at');
    }
}
