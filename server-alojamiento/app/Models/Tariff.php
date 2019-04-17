<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tariff extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
       'price',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
       
    ];

    function TariffType()
    {
       return $this->hasOne('App\TariffType');
    }

    function Capacities()
    {
       return $this->belongsToMany('App\Capacity')->withTimestamps();
    }

}