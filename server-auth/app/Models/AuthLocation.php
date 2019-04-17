<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AuthLocation extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
       'code_ubication',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
       
    ];

    function AccountRol()
    {
       return $this->hasOne('App\AccountRol');
    }

}