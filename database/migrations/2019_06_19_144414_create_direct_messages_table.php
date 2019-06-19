<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDirectMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('direct_messages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('body');
            $table->unsignedInteger('sender_id')->comment('user id of the sender');
            $table->unsignedInteger('receiver_id')->comment('user id of the receiver');
            $table->unsignedInteger('attachment_id')->nullable();
            $table->timestamp('read_at')->nullable();
            $table->timestamps();

            $table->foreign('sender_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('attachment_id')->references('id')->on('attachments')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('direct_messages');
    }
}
