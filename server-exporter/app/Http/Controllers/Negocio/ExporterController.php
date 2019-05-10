<?php

namespace App\Http\Controllers;

use App\Exports\DataExporter;
use Validator;
use Exception;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExporterController extends Controller
{

  function formulario_requisitos(Request $data) {
    $export = new DataExporter([
      [$data['id'], 2, 3],
      [4, 5, 6]
    ]);
    return Excel::download($export, 'invoices.xlsx');
  }
}
