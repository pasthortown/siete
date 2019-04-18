<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Register extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
       'code','autorized_complementary_capacities','establishment_id',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
       
    ];

    function ComplementaryServiceTypes()
    {
       return $this->belongsToMany('App\ComplementaryServiceType')->withTimestamps();
    }

    function RegisterType()
    {
       return $this->hasOne('App\RegisterType');
    }

    function RegisterState()
    {
       return $this->belongsTo('App\RegisterState');
    }

    function RegisterRequisite()
    {
       return $this->belongsTo('App\RegisterRequisite');
    }

    function Capacities()
    {
       return $this->belongsToMany('App\Capacity')->withTimestamps();
    }

    function ComplementaryServiceFoods()
    {
       return $this->belongsToMany('App\ComplementaryServiceFood')->withTimestamps();
    }

}