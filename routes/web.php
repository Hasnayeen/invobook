<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('user/profile', function () {
//     return view('filament.app.pages.profile');
// })->name('profile');

Route::get('/mailable', function () {
    $invoice = App\Models\TeamInvitation::find(1);

    return new App\Mail\TeamInvitation($invoice);
});

Route::get('/team-invitations/{invitation}', function () {
    return 'ok';
})->middleware(['signed'])->name('team-invitations.accept');
