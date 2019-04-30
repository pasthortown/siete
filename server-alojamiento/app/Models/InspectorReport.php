<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InspectorReport extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
       'body','params',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
       
    ];

    function InspectionAssigment()
    {
       return $this->hasOne('App\InspectionAssigment');
    }

    function InspectorReportAttachment()
    {
       return $this->belongsTo('App\InspectorReportAttachment');
    }

}