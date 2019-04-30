<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InspectorReportAttachment extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
       'inspector_report_attachment_file_type','inspector_report_attachment_file_name','inspector_report_attachment_file',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
       
    ];

    function InspectorReport()
    {
       return $this->hasOne('App\InspectorReport');
    }

}