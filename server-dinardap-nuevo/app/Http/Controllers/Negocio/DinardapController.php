<?php

namespace App\Http\Controllers;

use Validator;
use Exception;
use SoapClient;
use Illuminate\Http\Request;

class DinardapController extends Controller
{
  protected function soap() {
    $opts = array(
        'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
      )
    );
  
    $context = stream_context_create($opts);
    $wsdl = "https://interoperabilidad.dinardap.gob.ec/interoperador-v2?wsdl";
  
    try
    {
      $this->client = new SoapClient($wsdl, array(
        'stream_context' => $context, 'trace' => true,
        'login' => 'InToMiNtUR', 'password' => 'H0K;c[viIHEogh')
      );  
      return $this->client;
    }catch ( Exception $e) {
      return $e;
    }
  }
    
  public function checkSoap(Request $request) {
    $url = "https://interoperabilidad.dinardap.gob.ec/interoperador-v2?wsdl";
    $options["connection_timeout"] = 25;
    $options["location"] = $url;
    $options["trace"] = 1;
    $options["login"] = 'InToMiNtUR';
    $options["password"] = 'H0K;c[viIHEogh';
    $opts = array(
        'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
      )
    );
    $context = stream_context_create($opts);
    
    $client = new SoapClient($url,$options);

    $identificacion = '1720364049';
    $codigoPaquete = 2112;
    $result = $client->consultar(["identificacion"=>$identificacion, "codigoPaquete"=>$codigoPaquete]);
    return response()->json($result,200);
  }

  public function Cedula(Request $request) {
    $data = $request->json()->all();
    $identificacion = $data['identificacion'];
    $codigoPaquete = 2112;
    $this->client = $this->soap();
    try
    {
      $result = $this->client->consultar(["identificacion"=>$identificacion, "codigoPaquete"=>$codigoPaquete]);
      return response()->json($result,200);
    }catch (Exception $e) {
      return $e;
    }
  }

  public function RUC(Request $request) {
    $data = $request->json()->all();
    $identificacion = $data['numeroIdentificacion'];
    $codigoPaquete = 50;
    $this->client = $this->soap();
    try
    {
      $result = $this->client->getFichaGeneral(["numeroIdentificacion"=>$identificacion, "codigoPaquete"=>$codigoPaquete]);
      return response()->json($result,200);
    }catch (Exception $e) {
      return $e;
    }
  }

  public function SuperCIAS(Request $request) {
    $data = $request->json()->all();
    $identificacion = $data['numeroIdentificacion'];
    $codigoPaquete = 573;
    $this->client = $this->soap();
    try
    {
      $result = $this->client->getFichaGeneral(["numeroIdentificacion"=>$identificacion, "codigoPaquete"=>$codigoPaquete]);
      return response()->json($result,200);
    }catch (Exception $e) {
      return $e;
    }
  }
}
