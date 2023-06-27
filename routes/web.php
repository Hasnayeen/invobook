<?php

use App\Actions\GenerateInvoicePdf;
use App\Models\WorkSession;
use Illuminate\Support\Facades\File;
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

Route::get('test', function(GenerateInvoicePdf $generateInvoicePdf) {
    $data = File::get(public_path('invoices.data'));
    $itemss = json_decode(File::get(public_path('invoices.item')), true);
    $items = [];
    foreach ($itemss as $key => $item) {
        $items[] = WorkSession::make($item);
    }
    return $generateInvoicePdf($items, json_decode($data, true), [
        'from' => '2021-01-01',
        'to' => '2021-01-31',
    ]);
});
