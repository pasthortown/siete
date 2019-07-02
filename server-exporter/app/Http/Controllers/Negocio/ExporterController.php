<?php

namespace App\Http\Controllers;

use App\Exports\DataExporter;
use Validator;
use Exception;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\App;

class ExporterController extends Controller
{

  function pdf_file(Request $data) {
    $request = $data->json()->all();
    $html = $request['html'];
    $pdf = App::make('dompdf.wrapper');
    $pdf->loadHTML($html);
    $bytes = $pdf->output();
    $toReturn = base64_encode($bytes);
    return response()->json($toReturn, 200);
  }

  function excel_file(Request $data) {
    /*$request = $data->json()->all();
    $header = $request['header'];
    $body = $request['body'];
    $export = new DataExporter([
      $header, $body
    ]);
    $uniqueId = uniqid();
    Excel::store($export, $uniqueId.'.xlsx', 'local');
    return response()->json($uniqueId.'.xlsx',200);*/
  }
}
