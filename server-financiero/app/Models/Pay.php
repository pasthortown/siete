<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pay extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
       'amount_payed','amount_to_pay','pay_date','annotation','code','max_pay_date','taxes','ruc_id',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
       
    ];

    function PayAttachment()
    {
       return $this->belongsTo('App\PayAttachment');
    }

}