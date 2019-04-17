<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DeclarationItemValue extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
       'value',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
       
    ];

    function Declaration()
    {
       return $this->hasOne('App\Declaration');
    }

    function DeclarationItem()
    {
       return $this->hasOne('App\DeclarationItem');
    }

}