<?php

namespace App\Services;

use App\Events\MessageCreated;
use Illuminate\Support\Facades\Auth;
use App\Repositories\MessageRepository;

class MessageService
{
    /**
     * @var mixed
     */
    protected $messageRepository;

    /**
     * @param MessageRepository $messageRepository
     */
    public function __construct(MessageRepository $messageRepository)
    {
        $this->messageRepository = $messageRepository;
    }

    /**
     * @param  mixed $data
     * @param  mixed $slug
     * @return mixed
     */
    public function saveMessage($data, $slug)
    {
        $id = $this->getIdFromSlug($data['type'], $slug);
        $data['user_id'] = Auth::user()->id;
        $data['username'] = Auth::user()->username;
        $data['messageable_type'] = $data['type'];
        $data['messageable_id'] = $id;
        $message = $this->messageRepository->saveMessage($data);
        event(new MessageCreated($message));

        return $message;
    }

    public function getAllMessages($type, $slug)
    {
        $id = $this->getIdFromSlug($type, $slug);

        return [$this->messageRepository->getAllMessages($type, $id), $id];
    }

    private function getIdFromSlug($type, $slug)
    {
        $model = 'App\Models\\'.ucwords($type);
        $repository = 'App\Repositories\\'.ucwords($type).'Repository';
        $repository = new $repository(new $model);

        return $repository->getIdFromSlug($slug);
    }
}
