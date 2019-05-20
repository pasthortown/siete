<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CapacityType extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
       'name','description','bed_quantity','is_island',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
       
    ];

    function Capacity()
    {
       return $this->belongsTo('App\Capacity');
    }

    function RegisterType()
    {
       return $this->hasOne('App\RegisterType');
    }

}