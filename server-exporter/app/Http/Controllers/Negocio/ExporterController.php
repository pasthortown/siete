<?php

namespace App\Http\Controllers;

use Validator;
use Exception;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExporterController extends Controller
{

  function formulario_requisitos(Request $data) {
    $toReturn = [[1,2,3],[4,5,6]];
    return json_encode($toReturn);
  }
}
