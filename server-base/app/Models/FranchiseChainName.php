<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FranchiseChainName extends Model
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

    function Rucs()
    {
       return $this->belongsToMany('App\Ruc')->withTimestamps();
    }

}