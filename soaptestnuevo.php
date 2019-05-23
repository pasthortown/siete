<?php

class SoapTest
{
  protected function soap() {
    $opts = array(
        'ssl' => array(
          'local_cert' => './backup/certificados/dinardapgobec.pem',
      )
    );
    $context = stream_context_create($opts);
    $wsdl = "https://interoperabilidad.dinardap.gob.ec/interoperador-v2?wsdl";
    $this->client = new SoapClient($wsdl, array(
      'context' => $context, 'trace' => true,
      'login' => 'InToMiNtUR', 'password' => 'H0K;c[viIHEogh')
    );  
    return $this->client;
  }
     
  public function Cedula($identificacion, $codigoPaquete) {
    $this->client = $this->soap();
    try
    {
      $result = $this->client->consultar(["identificacion"=>$identificacion, "codigoPaquete"=>$codigoPaquete]);
    }catch (Exception $e) {
      return json_encode($e);
    }
  }
}

$soapTest = new SoapTest();
echo $soapTest->Cedula('1720364049', 2112);