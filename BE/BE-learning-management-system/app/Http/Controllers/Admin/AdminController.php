<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\LoginRequest;
use Illuminate\Http\Request;
use App\Traits\HttpResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    //
    use HttpResponse;

    public function login(LoginRequest $request)
    {

        $request->validated($request->all());

        $admin = \App\Models\Admin::where('email', $request->email)->first();

        if (!$admin || !Hash::check($request->password, $admin->password)) {
            return $this->error('', 'Invalid credentials', 401);
        }

        $token = $admin->createToken('API TOKEN of ' . $admin->name)->plainTextToken;

        return $this->success([
            'user' => $admin,
            'message' => 'Login successful',
            'token' => $token,
            'token_type' => 'Bearer'
        ]);
    }
    public function profile(Request $request)
    {
        $admin = Auth::guard('admin-api')->user();

        return $this->success([
            'user' => $admin
        ]);
    }
}
