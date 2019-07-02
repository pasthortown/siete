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

  function excel_file(Request $data) {
    $request = $data->json()->all();
    $header = $request['header'];
    $body = $request['body'];
    $export = new DataExporter([
      $header, $body
    ]);
    $uniqueId = uniqid();
    Excel::store($export, $uniqueId.'.xlsx', 'local');
    return response()->json($uniqueId.'.xlsx',200);
  }

  function pdf_file(Request $data) {
    $request = $data->json()->all();
    $html = $request['html'];
    $pdf = App::make('dompdf.wrapper');
    $pdf->loadHTML($html);
    $bytes = $pdf->stream();
    $toReturn = base64_encode($bytes);
    return response()->json($toReturn, 200);
  }

  function download(Request $data) {
    $ready = Storage::download($data['file'], $data['name']);
    return $ready;
  }

  protected function httpGet($url, $data=NULL, $headers = NULL, $token) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    if(!empty($data)){
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    }
    $headersSend = array();
    array_push($headersSend, 'api_token:'.$token);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headersSend);
    $response = curl_exec($ch);
    if (curl_error($ch)) {
        trigger_error('Curl Error:' . curl_error($ch));
    }
    curl_close($ch);
    return $response;
  }
}
