<?php

namespace App\Http\Controllers;

use Validator;
use Exception;
use Illuminate\Http\Request;

class DinardapController extends Controller
{
  protected function buildParameters($parameters) {
		$toReturn = "         <parametros>\n";
		foreach ($parameters as $parameter) {
			$toReturn .= "            <parametro>\n";
			$toReturn .= "               <nombre>".$parameter["nombre"]."</nombre>\n";
			$toReturn .= "               <valor>".$parameter["valor"]."</valor>\n";
			$toReturn .= "            </parametro>\n";
		}
		$toReturn .= "         </parametros>\n";
		return $toReturn;
	}

	protected function connect($parameters) {
		$parameters_xml = $this->buildParameters($parameters);
		$soapUrl = "https://interoperabilidad.dinardap.gob.ec/interoperador-v2?wsdl";
		$soapUser = "InToMiNtUR";
		$soapPassword = "H0K;c[viIHEogh";
		$xml_post_string = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:int=\"http://interoperabilidad.dinardap.gob.ec/interoperador/\">\n";
		$xml_post_string .= "   <soapenv:Header/>\n";
		$xml_post_string .= "   <soapenv:Body>\n";
		$xml_post_string .= "      <int:consultar>\n" . $parameters_xml;
		$xml_post_string .= "      </int:consultar>\n";
		$xml_post_string .= "   </soapenv:Body>\n";
		$xml_post_string .= "</soapenv:Envelope>\n";
		
		$headers = array(
			"Content-type: text/xml;charset=\"utf-8\"",
			"Accept: text/xml",
			"Cache-Control: no-cache",
			"Pragma: no-cache",
			"SOAPAction: http://interoperabilidad.dinardap.gob.ec/interoperador/consultar", 
			"Content-length: ".strlen($xml_post_string),
		);
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_URL, $soapUrl);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_USERPWD, $soapUser.":".$soapPassword); 
		curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $xml_post_string);
		curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
		$curl_response = curl_exec($ch);
		curl_close($ch);
		if(!$curl_response) {
			return 0;
		} else{
      try {
        $consultarResponse = explode('<ns2:consultarResponse xmlns:ns2="http://interoperabilidad.dinardap.gob.ec/interoperador/">', $curl_response)[1];
        $response  = explode('</ns2:consultarResponse>', $consultarResponse)[0];
        return response()->json(simplexml_load_string($response),200);
      } catch (Exception $e) {
        return 0;
      }
		}
  }
  
  public function RUC(Request $request) {
	$data = $request->json()->all();
	//SRI UBICACIONES GEOGRAFICAS
	$codigoPaquete = ["nombre"=>"codigoPaquete", "valor"=>"2113"];
    $identificacion = ["nombre"=>"identificacion", "valor"=>$data["RUC"]];
    $parameters = array($codigoPaquete, $identificacion);
	$sri_ubicaciones_geograficas = $this->connect($parameters);
	//SRI RUC
	$codigoPaquete = ["nombre"=>"codigoPaquete", "valor"=>"2114"];
    $identificacion = ["nombre"=>"identificacion", "valor"=>$data["RUC"]];
    $parameters = array($codigoPaquete, $identificacion);
    $sri_ruc = $this->connect($parameters);
	//SRI ESTABLECIMIENTOS
	$codigoPaquete = ["nombre"=>"codigoPaquete", "valor"=>"2115"];
    $identificacion = ["nombre"=>"identificacion", "valor"=>$data["RUC"]];
    $parameters = array($codigoPaquete, $identificacion);
	$sri_establecimientos = $this->connect($parameters);
	//SRI RUC COMPLETO
	$codigoPaquete = ["nombre"=>"codigoPaquete", "valor"=>"2116"];
    $identificacion = ["nombre"=>"identificacion", "valor"=>$data["RUC"]];
    $parameters = array($codigoPaquete, $identificacion);
	$sri_ruc_completo = $this->connect($parameters);
	//SRI RUC DATOS
	$codigoPaquete = ["nombre"=>"codigoPaquete", "valor"=>"2117"];
    $identificacion = ["nombre"=>"identificacion", "valor"=>$data["RUC"]];
    $parameters = array($codigoPaquete, $identificacion);
	$sri_ruc_datos = $this->connect($parameters);
	//SRI RUC CONTACTOS
	$codigoPaquete = ["nombre"=>"codigoPaquete", "valor"=>"2118"];
    $identificacion = ["nombre"=>"identificacion", "valor"=>$data["RUC"]];
    $parameters = array($codigoPaquete, $identificacion);
	$sri_ruc_contactos = $this->connect($parameters);
	return response()->json(["sri_ruc"=>$sri_ruc, "sri_establecimientos"=>$sri_establecimientos, "sri_ruc_completo"=>$sri_ruc_completo, "sri_ruc_datos"=>$sri_ruc_datos, "sri_ruc_contactos"=>$sri_ruc_contactos, "sri_ubicaciones_geograficas"=>$sri_ubicaciones_geograficas],200);
  }

  public function cedula(Request $request) {
	$data = $request->json()->all();
    $codigoPaquete = ["nombre"=>"codigoPaquete", "valor"=>"2112"];
    $identificacion = ["nombre"=>"identificacion", "valor"=>$data["identificacion"]];
    $parameters = array($codigoPaquete, $identificacion);
    return $this->connect($parameters);
  }

  public function super_cias(Request $request) {
	$data = $request->json()->all();
    $codigoPaquete = ["nombre"=>"codigoPaquete", "valor"=>"2119"];
    $identificacion = ["nombre"=>"identificacion", "valor"=>$data["identificacion"]];
    $parameters = array($codigoPaquete, $identificacion);
	$companias = $this->connect($parameters);
	$data = $request->json()->all();
    $codigoPaquete = ["nombre"=>"codigoPaquete", "valor"=>"2120"];
    $identificacion = ["nombre"=>"identificacion", "valor"=>$data["identificacion"]];
    $parameters = array($codigoPaquete, $identificacion);
	$administrador = $this->connect($parameters);
	return response()->json(["companias"=>$companias, "administrador"=>$administrador],200);
  }
}
