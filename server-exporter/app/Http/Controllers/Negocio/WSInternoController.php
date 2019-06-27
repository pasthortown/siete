<?php

namespace App\Http\Controllers;

use App\Exports\DataExporter;
use Validator;
use Exception;
use SoapClient;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Storage;

class WSInternoController extends Controller
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
        $wsdl = "http://jbosstst.turismo.gob.ec:18080/generar-pdf-1.0/GenerarPDF/GenerarDocumentosBean?wsdl";
        
        try
        {
            $this->client = new SoapClient($wsdl, array(
            'stream_context' => $context, 'trace' => true,
            'login' => '', 'password' => '')
            );  
            return $this->client;
        }catch ( Exception $e) {
            return $e;
        }
    }
    
    function CrearNotificacion(Request $data) {
        $request = $data->json()->all();
        $nombreRepLegal = $request['nombreRepLegal'];
        $nombreEstablecimiento = $request['nombreEstablecimiento'];
        $direccionEst = $request['direccionEst'];
        $nombreTecnicoZonal = $request['nombreTZ'];
        $this->client = $this->soap();
        try
        {
          $result = $this->client->CrearNotificacion([
              "nombreRepLegal"=>$nombreRepLegal,
              "nombreEstablecimiento"=>$nombreEstablecimiento,
              "direccionEst"=>$direccionEst,
              "nombreTZ"=>$nombreTecnicoZonal,
              ]);
          return response()->json($result,200);
        }catch (Exception $e) {
          return $e;
        }
    }

    function CrearInforme(Request $data) {
        $request = $data->json()->all();
        $nombreCoordinadorZonal = $request['nombreCoordinadorZonal'];
        $ciudadEstablecimiento = $request['ciudadEstablecimiento'];
        $nombreComercial = $request['nombreComercial'];
        $actividad = $request['actividad'];
        $clasificacion = $request['clasificacion'];
        $categoria = $request['categoria'];
        $propietario = $request['propietario'];
        $representanteLegal = $request['representanteLegal'];
        $ruc = $request['ruc'];
        $provincia = $request['provincia'];
        $canton = $request['canton'];
        $parroquia = $request['parroquia'];
        $direccion = $request['direccion'];
        $numeroInforme = $request['numeroInforme'];
        $fechaTramite = $request['fechaTramite'];
        $tipoTramite = $request['tipoTramite'];
        $antecedente = $request['antecedente'];
        $conclusion = $request['conclusion'];
        $accionesRealizadas = $request['accionesRealizadas'];
        $cargoFirmante = $request['cargoFirmante'];
        $nombreCoordinacionZonal = $request['nombreCoordinacionZonal'];
        $numeroHabitaciones = $request['numeroHabitaciones'];
        $numeroCamas = $request['numeroCamas'];
        $numeroPlazas = $request['numeroPlazas'];
        $recomendaciones = $request['recomendaciones'];
        $this->client = $this->soap();
        try
        {
          $result = $this->client->CrearInforme([
                "nombreCoordinadorZonal"=>$nombreCoordinadorZonal,
                "ciudadEstablecimiento"=>$ciudadEstablecimiento,
                "nombreComercial"=>$nombreComercial,
                "actividad"=>$actividad,
                "clasificacion"=>$clasificacion,
                "categoria"=>$categoria,
                "propietario"=>$propietario,
                "representanteLegal"=>$representanteLegal,
                "ruc"=>$ruc,
                "provincia"=>$provincia,
                "canton"=>$canton,
                "parroquia"=>$parroquia,
                "direccion"=>$direccion,
                "numeroInforme"=>$numeroInforme,
                "fechaTramite"=>$fechaTramite,
                "tipoTramite"=>$tipoTramite,
                "antecedente"=>$antecedente,
                "conclusion"=>$conclusion,
                "accionesRealizadas"=>$accionesRealizadas,
                "cargoFirmante"=>$cargoFirmante,
                "nombreCoordinacionZonal"=>$nombreCoordinacionZonal,
                "numeroHabitaciones"=>$numeroHabitaciones,
                "numeroCamas"=>$numeroCamas,
                "numeroPlazas"=>$numeroPlazas,
                "recomendaciones"=>$recomendaciones,
              ]);
          return response()->json($result,200);
        }catch (Exception $e) {
          return $e;
        }
    }

    function CrearCertificado(Request $data) {
        $request = $data->json()->all();
        $tipoTramite = $request['tipoTramite'];
        $numeroRegistro = $request['numeroRegistro'];
        $representanteLegal = $request['representanteLegal'];
        $propietario = $request['propietario'];
        $nombreComercial = $request['nombreComercial'];
        $actividad = $request['actividad'];
        $clasificacion = $request['clasificacion'];
        $categoria = $request['categoria'];
        $ruc = $request['ruc'];
        $direccion = $request['direccion'];
        $ciudadEstablecimiento = $request['ciudadEstablecimiento'];
        $canton = $request['canton'];
        $provincia = $request['provincia'];
        $nombreCoordinadorZonal = $request['nombreCoordinadorZonal'];
        $cargoFirmante = $request['cargoFirmante'];
        $nombreCoordinacionZonal = $request['nombreCoordinacionZonal'];
        $idEstablecimiento = $request['idEstablecimiento'];
        $capacidades = $request['capacidades'];
        $this->client = $this->soap();
        try
        {
          $result = $this->client->CrearCertificado([
            "tipoTramite"=>$tipoTramite,
            "numeroRegistro"=>$numeroRegistro,
            "representanteLegal"=>$representanteLegal,
            "propietario"=>$propietario,
            "nombreComercial"=>$nombreComercial,
            "actividad"=>$actividad,
            "clasificacion"=>$clasificacion,
            "categoria"=>$categoria,
            "ruc"=>$ruc,
            "direccion"=>$direccion,
            "ciudadEstablecimiento"=>$ciudadEstablecimiento,
            "canton"=>$canton,
            "provincia"=>$provincia,
            "nombreCoordinadorZonal"=>$nombreCoordinadorZonal,
            "cargoFirmante"=>$cargoFirmante,
            "nombreCoordinacionZonal"=>$nombreCoordinacionZonal,
            "idEstablecimiento"=>$idEstablecimiento,
            "capacidades"=>$capacidades,
              ]);
          return response()->json($result,200);
        }catch (Exception $e) {
          return $e;
        }
    }
}
