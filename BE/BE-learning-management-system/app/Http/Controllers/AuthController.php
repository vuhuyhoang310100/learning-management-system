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
    $user = \App\Models\User::where('email', $request->email)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        return $this->error('', 'Invalid credentials', 401);
    }
    $token = $user->createToken('API TOKEN of ' . $user->name)->plainTextToken;

        return $this->success([
            'user' => $user,
            'message' => 'Login successful',
            'token' => $token,
            'token_type' => 'Bearer'
        ]);
}

    public function register(StoreUserRequest $request)
    {
        $request->validated($request->all());
        $user = User::firstOrCreate([
            'name' => $request->name,
            'email'=>$request->email,
            'password' => Hash::make($request->password),
        ]);
        return $this->success(
            ['user'=>$user,
                    'token'=>$user->createToken('API TOKEN of '.$user->name)->plainTextToken
            ]
        );
    }
    public function logout()
    {
        $user = Auth::user();

        $user->currentAccessToken()->delete();

        return $this->success([
            'message'=>'Logged out successfully',
        ]);
    }

}
