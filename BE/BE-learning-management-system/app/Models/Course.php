<?php

namespace App\Models;

use App\Traits\Encryptable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory, Encryptable;

    public $incrementing = false; 
    protected $keyType = 'string';

    protected $fillable = [
        'id', 
        'title', 
        'description',
        'image_path',
        'teacher_id',
        'parent_id'
    ];

    // Mã hoá đường dẫn của hình ảnh
    protected $encryptable = [
        'image_path'
    ];

    // Mỗi khi tạo trong db thì tự động là uuid
    protected static function booted()
    {
        static::creating(function ($course) {
            $course->id = (string) \Str::uuid();
        });
    }
}
