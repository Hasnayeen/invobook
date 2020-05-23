<?php

namespace App\Base\Console\Commands;

use App\Base\Services\MessagingService\SendMessageInterface;
use Illuminate\Console\Command;

class UnreadDirectMessageCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'email:unread-direct-message';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Email user about their unread direct messages';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle(SendMessageInterface $sendMessageInterface)
    {
        $sendMessageInterface->sendMessage();
    }
}
