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

Route::get('/', function () {
    return view('welcome');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});


//Routes for Admin page
use App\Http\Controllers\UserController;

Route::get('/admin', [UserController::class, 'show']); //Show main admin page
Route::post('/admin/store', [UserController::class, 'store'])->name('users.store'); //Store data 
Route::delete('/admin/deleteSelected', [UserController::class, 'deleteSelected'])->name('users.deleteSelected'); //Delete data
Route::put('/admin/update', [UserController::class, 'update'])->name('users.update'); //Update data


