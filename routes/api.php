<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AkceData;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::get('/events', [AkceData::class, 'GetAkceData']);
Route::get('/divadla', [AkceData::class, 'GetDivadla']);
Route::get('/film', [AkceData::class, 'GetFilm']);
Route::get('/hudba', [AkceData::class, 'GetHudba']);
Route::get('/tic', [AkceData::class, 'GetTIC']);
Route::get('/prorodiny', [AkceData::class, 'GetProRodiny']);
Route::get('/veletrhy', [AkceData::class, 'GetVeletrhy']);
Route::get('/vystavy', [AkceData::class, 'GetVystavy']);
Route::get('/nocnizivot', [AkceData::class, 'GetNocniZivot']);
Route::get('/top', [AkceData::class, 'GetTOP']);
Route::get('/festivaly', [AkceData::class, 'GetFestivaly']);
Route::get('/gastronomicke', [AkceData::class, 'GetGastronomicke']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
