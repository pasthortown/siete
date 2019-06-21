<?php

namespace App\Http\Controllers;

use Validator;
use Exception;
use SoapClient;
use Illuminate\Http\Request;

class DinardapController extends Controller
{
  public function Cedula(Request $request) {
    $data = $request->json()->all();
    $respuesta = $this->httpPost(env('API_DINARDAP').'cedula', json_encode(['numeroIdentificacion'=>$data['numeroIdentificacion']]), null, null);
    return response()->json(json_decode($respuesta),200);
  }

  public function RUC(Request $request) {
    $data = $request->json()->all();
    $respuesta = $this->httpPost(env('API_DINARDAP').'ruc', json_encode(['numeroIdentificacion'=>$data['numeroIdentificacion']]), null, null);
    return response()->json(json_decode($respuesta),200);
  }

  protected function httpPost($url, $data=NULL, $headers = NULL, $token) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, 1);
    if(!empty($data)){
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    }
    $headersSend = array('Content-Type: application/json');
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headersSend);
    $response = curl_exec($ch);

    if (curl_error($ch)) {
        trigger_error('Curl Error:' . curl_error($ch));
    }
    curl_close($ch);
    return $response;
  }

}
