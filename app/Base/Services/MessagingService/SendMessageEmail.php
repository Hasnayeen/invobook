<?php

namespace App\Base\Services\MessagingService;

use App\Base\Jobs\UserUnreadDirectMessageJob;
use App\Base\Models\User;
use App\Base\Services\MessagingService\SendMessageInterface;

use Illuminate\Support\Facades\DB;

class SendMessageEmail implements SendMessageInterface
{
	
	public function sendMessage()
	{
		$this->mailHandle();
	}

	private function mailHandle()
	{
		$users = User::all();

        foreach ($users as $user) {
            $messageCounter = $this->getCountUnreadDirectMessages($user->id);
            if ($messageCounter > 0) {
            	UserUnreadDirectMessageJob::dispatch($messageCounter, $user->email)->delay(now()->addMinutes(1));
            }
        }
	}


    private function getCountUnreadDirectMessages($recieverId)
    {
        $diffHours = config('message.unread_direct_message_older_than_hours');

        $result = DB::table('direct_messages')->where('receiver_id', $recieverId)->whereRaw('ABS(TIMESTAMPDIFF(HOUR, updated_at, NOW())) >= ?', [$diffHours])->whereNull('read_at')->count();

        return $result;
    }
}