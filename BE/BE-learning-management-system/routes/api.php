<?php

use App\Http\Controllers\Admin\AdminController;
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



//Public Route
// Route::middleware('admin.auth')->group(function () {
//     Route::get('/admin/dashboard', [AdminController::class, 'dashboard']);
//     // Các route khác của admin
// });

Route::prefix('auth')->group(function () {
    Route::prefix('user')->group(function () {
        Route::post('/login', [AuthController::class, 'login'])->name('auth-user-login');
        Route::post('/register', [AuthController::class, 'register'])->name('auth-user-register');
    });

    Route::prefix('admin')->group(function () {
        Route::post('/login', [AdminController::class, 'login'])->name('auth-admin-login');

        // Route::post('/register', [AuthController::class, 'registerAdmin'])->name('auth-admin-register');
    });
});

//Teacher routes, sau rồi sẽ update middleware teacher sau
Route::prefix('teacher')->name('teacher-')->group(function () {
    Route::prefix('courses')->name('course-')->group(function (){
        Route::post('/post-create', [CourseController::class, 'postCreate'])->name('post-create');
        Route::post('/post-update/{course}', [CourseController::class, 'postUpdate'])->name('post-update');
        Route::get('/list', [CourseController::class, 'list'])->name('list');
        Route::get('/detail/{course}', [CourseController::class, 'detail'])->name('detail');
        Route::post('/delete/{course}', [CourseController::class,'delete'])->name('delete');
    });
});

//protected Route
Route::group(['middleware' => ['auth.user']], function(){
    // Route::get('/user/profile', [UserController::class, 'profile']);
    Route::post('/logout',[AuthController::class,'logout'])->name('auth-logout');
});
Route::prefix('admin')->group(function() {
    Route::middleware(['admin.auth'])->group(function () {
        Route::get('/get-profile', [AdminController::class, 'profile'])->name('admin-profile');
        Route::post('/logout', [AuthController::class, 'logout'])->name('auth-logout');
    });
});
