<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Declaration extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
       'establishment_id','declaration_date','year','max_date_to_pay',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
       
    ];

    function DeclarationItemValues()
    {
       return $this->belongsToMany('App\DeclarationItemValue')->withTimestamps();
    }

    function StateDeclaration()
    {
       return $this->belongsTo('App\StateDeclaration');
    }

    function Pay()
    {
       return $this->belongsTo('App\Pay');
    }

    function DeclarationAttachment()
    {
       return $this->belongsTo('App\DeclarationAttachment');
    }

    function ApprovalStates()
    {
       return $this->belongsToMany('App\ApprovalState')->withTimestamps();
    }

}