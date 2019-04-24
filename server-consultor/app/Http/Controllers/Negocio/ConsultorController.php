<?php

namespace App\Http\Controllers;

use Validator;
use Exception;
use SoapClient;
use Illuminate\Http\Request;

class ConsultorController extends Controller
{
  public function registers(Request $data) {
    $request = $data->json()->all();
    $token = $data->header('api_token');
    $toReturn = [];
    $registers_alojamiento = json_decode($this->httpGet('http://localhost:8002/register',null,null,$token));
    foreach($registers_alojamiento as $register) {
      $establishment = json_decode($this->httpGet('http://localhost:8001/establishment?id='.$register->establishment_id,null,null,$token));
      $ruc = json_decode($this->httpGet('http://localhost:8001/ruc?id='.$establishment->Establishment->ruc_id,null,null,$token));
      array_push($toReturn, ["register"=>$register, "establishment"=>$establishment->Establishment, "ruc"=>$ruc->Ruc]);
    }
    return response()->json($toReturn,200);
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
