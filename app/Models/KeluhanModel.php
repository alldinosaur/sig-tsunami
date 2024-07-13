<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KeluhanModel extends Model
{
    protected $table = "keluhan";
    
    protected $fillable = ['nama', 'email', 'deskripsi'];
}
