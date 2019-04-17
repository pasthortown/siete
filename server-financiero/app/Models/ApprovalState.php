<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ApprovalState extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
       'value','date',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
       
    ];

    function Approval()
    {
       return $this->hasOne('App\Approval');
    }

    function Declarations()
    {
       return $this->belongsToMany('App\Declaration')->withTimestamps();
    }

}