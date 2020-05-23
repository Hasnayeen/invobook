<?php

namespace App\Base\Jobs;

use App\Base\Mail\UserUnreadDirectMessageMailable;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redis;

class UserUnreadDirectMessageJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $email;
    protected $numberOfUnreadMessages;

    /**
     * Create a new job instance.
     *
     * @param $numberOfUnreadMessages
     * @param $email
     * @return void
     */
    public function __construct($numberOfUnreadMessages, $email)
    {
        $this->numberOfUnreadMessages = $numberOfUnreadMessages;
        $this->email = $email;
    }

    /**
     * Execute the job.
     * @return void
     */
    public function handle()
    {
        Redis::throttle('my-mailtrap')->allow(2)->every(1)->then(function () {
                Mail::to($this->email)->send(new UserUnreadDirectMessageMailable($this->numberOfUnreadMessages));
            }, function () {
                // Could not obtain lock; this job will be re-queued
                return $this->release(2);
        });
    }
}
