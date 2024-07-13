<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/App/review', 'AppController@review')->name('app.review');
Route::get('/', [AppController::class, 'index'])->name('app.index');
Route::get('/simpan-data', [AppController::class, 'simpanData'])->name('app.simpan-data');
// Route::post('/', [AppController::class, 'tambahKeluhan'])->name('app.keluhan');
// Route::post('/periksa', [AppController::class, 'tambahKeluhan'])->name('app.keluhan');
// Route::get('/hasil-periksa', [AppController::class, 'hasilPeriksa'])->name('app.hasil-periksa');
// Route::post('/hasil-periksa', [AppController::class, 'tambahKeluhan'])->name('app.keluhan');
// Route::post('/simpan-periksa', [AppController::class, 'simpanPeriksa'])->name('app.simpan-periksa');
// Route::get('/tutorial', [AppController::class, 'tutorial'])->name('app.tutorial');
