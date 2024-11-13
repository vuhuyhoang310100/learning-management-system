<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        Role::firstOrCreate(['name' => 'admin', 'guard_name' => 'admin-api']);
        Role::firstOrCreate(['name' => 'super_admin', 'guard_name' => 'admin-api']);
        Role::firstOrCreate(['name' => 'user', 'guard_name' => 'api']);

    }
}
