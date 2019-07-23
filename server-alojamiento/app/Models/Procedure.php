<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Procedure extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
       'name',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
       
    ];

    function RegisterProcedure()
    {
       return $this->belongsTo('App\RegisterProcedure');
    }

}