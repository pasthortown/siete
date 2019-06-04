<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use Exception;
use App\Agreement;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ZonalDataController extends Controller
{
    private $zonales = '[{"id":1,"name":"ZONAL Nº 1","telefono":"<a href=\"tel:062955711\">062955711 Ext. 2631</a>","direccion":"<a href=\"http://maps.google.com/maps?q=Sucre 1472 y Av. Teodoro Gómez\" target=\"blank\">Sucre 1472 y Av. Teodoro Gómez</a>"},
    {"id":2,"name":"ZONAL Nº 1","telefono":"<a href=\"tel:062955711\">062955-711 Ext. 2631</a>","direccion":"<a href=\"http://maps.google.com/maps?q=Sucre 1472 y Av. Teodoro Gómez\" target=\"blank\">Sucre 1472 y Av. Teodoro Gómez</a>"},
    {"id":3,"name":"ZONAL Nº 1","telefono":"<a href=\"tel:062958759\">062958759 Ext. 2631</a>","direccion":"<a href=\"http://maps.google.com/maps?q=Sucre 1472 y Av. Teodoro Gómez\" target=\"blank\">Sucre 1472 y Av. Teodoro Gómez</a>"},
    {"id":4,"name":"ZONAL Nº 2","telefono":"<a href=\"tel:023999333\">023999333 Ext. 1003/1238/1059</a>","direccion":"<a href=\"http://maps.google.com/maps?q=Calle Quito y Chimborazo\" target=\"blank\">Calle:﻿Quito y Chimborazo, edificio Azriel. Malecón de la ciudad (FRANCISCO DE ORELLANA - ORELLANA)</a>"},
    {"id":5,"name":"ZONAL Nº 3","telefono":"<a href=\"tel:032605961\">032605961</a>","direccion":"<a href=\"http://maps.google.com/maps?q=Av. Daniel León Borja y Jacinto Gonzáles \" target=\"blank\">Av. Daniel León Borja y Jacinto Gonzáles </a>"},
    {"id":6,"name":"ZONAL Nº 3","telefono":"<a href=\"tel:032821800\">032821800 Ext. 2352</a>","direccion":"<a href=\"http://maps.google.com/maps?q=Av. Daniel León Borja y Jacinto Gonzáles \" target=\"blank\">Av. Daniel León Borja y Jacinto Gonzáles </a>"},
    {"id":7,"name":"ZONAL Nº 3","telefono":"<a href=\"tel:033735904\">033735904 Ext. 2331</a>","direccion":"<a href=\"http://maps.google.com/maps?q=Av. Daniel León Borja y Jacinto Gonzáles \" target=\"blank\">Av. Daniel León Borja y Jacinto Gonzáles </a>"},
    {"id":8,"name":"ZONAL Nº 3","telefono":"<a href=\"tel:032894655\">032894655 Ext. 2745</a>","direccion":"<a href=\"http://maps.google.com/maps?q=Av. Daniel León Borja y Jacinto Gonzáles \" target=\"blank\">Av. Daniel León Borja y Jacinto Gonzáles </a>"},
    {"id":9,"name":"ZONAL Nº 4","telefono":"<a href=\"tel:053043711\">053043711 Ext. 2550</a>","direccion":"<a href=\"http://maps.google.com/maps?q=Calle Los Nardos y Av. 15 de Abril\" target=\"blank\">Calle Los Nardos y Av. 15 de Abril </a>"},
    {"id":10,"name":"ZONAL Nº 4","telefono":"<a href=\"tel:053043734\">053043734 Ext. 2550</a>","direccion":"<a href=\"http://maps.google.com/maps?q=Calle Los Nardos y Av. 15 de Abril \" target=\"blank\">Calle Los Nardos y Av. 15 de Abril </a>"},
    {"id":11,"name":"ZONAL Nº 4","telefono":"<a href=\"tel:022745726\">022745726 Ext. 2200</a>","direccion":"<a href=\"http://maps.google.com/maps?q=Calle Los Nardos y Av. 15 de Abril \" target=\"blank\">Calle Los Nardos y Av. 15 de Abril </a>"},
    {"id":12,"name":"ZONAL Nº 5","telefono":"<a href=\"tel:042068508\">042068508 Ext. 2406/2419/2414/2416</a>","direccion":"<a href=\"http://maps.google.com/maps?q=Av. Francisco de Orellana y Justino Cornejo\" target=\"blank\">Av. Francisco de Orellana y Justino Cornejo</a>"},
    {"id":13,"name":"ZONAL Nº 5","telefono":"<a href=\"tel:043728904\">043728904</a>","direccion":"<a href=\"http://maps.google.com/maps?q=Av. Francisco de Orellana y Justino Cornejo\" target=\"blank\">Av. Francisco de Orellana y Justino Cornejo</a>"},
    {"id":14,"name":"ZONAL Nº 5","telefono":"<a href=\"tel:052739322\">052739322 Ext. 2530 </a>","direccion":"<a href=\"http://maps.google.com/maps?q=Av. Francisco de Orellana y Justino Cornejo\" target=\"blank\">Av. Francisco de Orellana y Justino Cornejo</a>"},
    {"id":15,"name":"ZONAL Nº 5","telefono":"<a href=\"tel:032983231\">032983231 Ext. 2382</a>","direccion":"<a href=\"http://maps.google.com/maps?q=Av. Francisco de Orellana y Justino Cornejo\" target=\"blank\">Av. Francisco de Orellana y Justino Cornejo</a>"},
    {"id":16,"name":"ZONAL Nº 6","telefono":"<a href=\"tel:072884944\">072884944 Ext. 2701/2707</a>","direccion":"<a href=\"http://maps.google.com/maps?q=Bolivar 1260 y Juan Montalvo\" target=\"blank\">Bolivar 1260 y Juan Montalvo, casa del coco (CUENCA - AZUAY)</a>"},
    {"id":17,"name":"ZONAL Nº 7","telefono":"<a href=\"tel:072572964\">072572964 Ext. 2770/2769/2768 </a>","direccion":"<a href=\"http://maps.google.com/maps?q=Calle Quito y Sucre \" target=\"blank\">Calle Quito y Sucre </a>"},
    {"id":18,"name":"ZONAL Nº 7","telefono":"<a href=\"tel:072606466\">072606466 Ext. 2775 </a>","direccion":"<a href=\"http://maps.google.com/maps?q=Calle Quito y Sucre \" target=\"blank\">Calle Quito y Sucre </a>"},
    {"id":19,"name":"ZONAL Nº 7","telefono":"<a href=\"tel:072932106\">072932 106 Ext. 2783</a>","direccion":"<a href=\"http://maps.google.com/maps?q=Calle Quito y Sucre \" target=\"blank\">Calle Quito y Sucre </a>"},
    {"id":20,"name":"ZONAL INSULAR ","telefono":"<a href=\"tel:052526174\">052526174 Ext. 2500/2505</a>","direccion":"<a href=\"http://maps.google.com/maps?q=Av. Charles Binford y 12 de Febrero \" target=\"blank\">Av. Charles Binford y 12 de Febrero (PUERTO AYORA - GALÁPAGOS)</a>"},
    {"id":21,"name":"ZONAL INSULAR ","telefono":"<a href=\"tel:052527135\">052527135 Ext. 2500/2505</a>","direccion":"<a href=\"http://maps.google.com/maps?q=Av. Charles Binford y 12 de Febrero\" target=\"blank\">Av. Charles Binford y 12 de Febrero (PUERTO AYORA - GALÁPAGOS)</a>"}]';

    function get(Request $request)
    {
       $data = json_decode($this->zonales);
       $id = $request['id'];
       if ($id == null) {
          return response()->json($data,200);
       } else {
           foreach($data as $zonal) {
               if ($id == $zonal->id) {
                $attach = [];
                return response()->json(["Zonal"=>$zonal, "attach"=>$attach],200);       
               }
           }
       }
    }
}