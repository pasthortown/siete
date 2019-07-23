<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProcedureJustification extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
       'justification','code','father_code',
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