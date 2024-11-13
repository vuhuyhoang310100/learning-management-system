<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CourseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Public Route
Route::prefix('auth')->group(function () {
    Route::post('/login', [AuthController::class, 'login'])->name('auth-login');
    Route::post('/register', [AuthController::class, 'register'])->name('auth-register');
});

//protected Route
Route::group(['middleware' => ['auth.user']], function(){
    Route::post('/logout',[AuthController::class,'logout'])->name('auth-logout');
});

//Admin routes
Route::prefix('teacher')->middleware('auth:sactum')->name('teacher.')->group(function () {
    Route::prefix('courses')->name('course.')->group(function (){
        Route::post('/post-create', [CourseController::class, 'postCreate'])->name('post-create');
        Route::post('/post-update', [CourseController::class, 'postUpdate'])->name('post-update');
        Route::get('/list', [CourseController::class, 'list'])->name('list');
        Route::get('/detail/{course}', [CourseController::class, 'detail'])->name('detail');
    });
});