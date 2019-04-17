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
    $wsdl = "http://interoperabilidad.dinardap.gob.ec:7979/interoperador?wsdl";
  
    try
    {
      $this->client = new SoapClient($wsdl, array(
        'stream_context' => $context, 'trace' => true,
        'login' => 'wsmtint', 'password' => '7ZU1X!)nIM')
      );  
      return $this->client;
    }catch ( Exception $e) {
      return $e;
    }
  }
    
  public function checkSoap(Request $request) {
    $parameters = $request->json()->all();
    $this->client = $this->soap();
    try
    {
      $result = $this->client->getFichaGeneral($parameters);
      return response()->json($result,200);
    }catch (Exception $e) {
      return $e;
    }
  }

  public function Cedula(Request $request) {
    $data = $request->json()->all();
    $identificacion = $data['numeroIdentificacion'];
    $codigoPaquete = 87;
    $this->client = $this->soap();
    try
    {
      $result = $this->client->getFichaGeneral(["numeroIdentificacion"=>$identificacion, "codigoPaquete"=>$codigoPaquete]);
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
