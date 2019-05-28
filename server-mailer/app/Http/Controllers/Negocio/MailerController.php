<?php

namespace App\Http\Controllers;

use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailerController extends Controller
{
  public function enviar(Request $data) {
    $result = $data->json()->all();
    $tipoMail = $result['tipoMail'];
    $email = $result['email'];
    $subject = $result['subject'];
    $information = $result['information'];
    return $this->send_mail($email, $information, $subject, env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'), $tipoMail);
  }

  protected function send_mail($to, $information, $subject, $fromMail,$fromAlias, $tipoMail) {
    $data = ['information'=>$information, 'appName'=>env('MAIL_FROM_NAME')];
    Mail::send($tipoMail, $data, function($message) use ($to, $information, $subject, $fromMail,$fromAlias) {
      $message->to($to, $information['para'])->subject($subject);
      $message->from($fromMail,$fromAlias);
    });
    return response()->json("Solicitud Procesada. Enviaremos la respuesta a tu correo electrónico en un momento.",200);
  }
}


/*{"tipoMail":"mail",
"email":"luis.salazar@turismo.gob.ec",
"subject":"Información de Detalle de Solicitud",
"information":{"para":"Luis Alfonso Salazar Vaca",
"tramite":"REGISTRO",
"ruc":"1720364049",
"nombreComercial":"LSystems",
"fechaSolicitud":"2019-05-25",
"actividad":"Alojamiento Turístico",
"clasificacion":"Hotel",
"categoria":"5 Estrellas",
"tipoSolicitud":"Registro",
"provincia":"Pichincha",
"canton":"Quito",
"parroquia":"San Isidro",
"callePrincipal":"Los Robles",
"calleInterseccion":"De los Cardos",
"numeracion":"E14-16"}}*/