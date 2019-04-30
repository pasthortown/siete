<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InspectionAssigment extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
       'id_user_inspector','date_assigment','date_inspection',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
       
    ];

    function Register()
    {
       return $this->hasOne('App\Register');
    }

    function InspectorReport()
    {
       return $this->belongsTo('App\InspectorReport');
    }

}