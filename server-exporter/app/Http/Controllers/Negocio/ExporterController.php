<?php

namespace App\Http\Controllers;

use Validator;
use Exception;
use SoapClient;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\DataExport;

class ExporterController extends Controller
{

  function formulario_requisitos(Request $data) {
    return Excel::download(new DataExport,"prueba.xlsx");
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
