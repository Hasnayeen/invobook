<?php

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('{type}.{id}', function ($user, $messageableType, $messageableId) {
    if ($messageableType === 'user') {
        return [
            'id'          => $user->id,
            'name'        => $user->name,
            'username'    => $user->username,
            'avatar'      => $user->avatar,
        ];
    }
    $entity = $messageableType . 's';
    if ($user->$entity()->find($messageableId)) {
        return [
            'id'          => $user->id,
            'name'        => $user->name,
            'username'    => $user->username,
            'avatar'      => $user->avatar,
        ];
    }
});
