<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\StoreUserRequest;
use App\Models\User;
use App\Traits\HttpResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //
    use HttpResponse;

    public function login(LoginUserRequest $request)
    {
        $request->validated($request->all());

        if (!Auth::attempt($request->only('email', 'password'))) {
            return $this->error('INVALID_CREDENTIALS', null, 401);
        }
        $user = Auth::user();
        $token = $user->createToken('API TOKEN of ' . $user->name)->plainTextToken;

        return $this->success(
            'LOGIN_SUCCESS',
            [
                'user' => $user,
                'token' => $token,
                'token_type' => 'Bearer',
            ],
        );
    }

    public function register(StoreUserRequest $request)
    {
        $request->validated($request->all());
        $user = User::firstOrCreate([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        return $this->success(
            'REGISTER_SUCCESS',
            [
                'user' => $user,
                'token' => $user->createToken('API TOKEN of '. $user->name)->plainTextToken,
                'token_type' => 'Bearer'
            ],
            200
        );
    }
    public function logout()
    {
        $user = Auth::user();
        \Log::info($user->currentAccessToken());
        $user->currentAccessToken()->delete();

        return $this->success(
            'LOGOUT_SUCCESS',
            null,
            200
        );
    }

    public function error($message, $data = null, $status = 400)
    {
        return response()->json([
            'code' => $status,
            'message' => $message,
            'data' => $data,
        ], $status);
    }

    public function success($message = null, $data = null, $status = 200)
    {
        return response()->json([
            'code' => $status,
            'message' => $message ?? 'Request was successful.',
            'data' => $data,
        ], $status);
    }
}
