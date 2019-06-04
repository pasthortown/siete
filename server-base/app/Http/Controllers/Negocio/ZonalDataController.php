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
    private $zonales = '[{"id":1,"name":"ZONAL Nº 1","telefono":"(06) 2955-711 Ext. 2631","direccion":"Calle: Sucre 1472 y Av. Teodoro Gómez (IBARRA - IMBABURA)"},
        {"id":2,"name":"ZONAL Nº 1","telefono":"(06) 2958-547  Ext. 2631","direccion":"Calle: Sucre 1472 y Av. Teodoro Gómez (IBARRA - IMBABURA)"},
        {"id":3,"name":"ZONAL Nº 1","telefono":"(06) 2958-759 Ext. 2631","direccion":"Calle: Sucre 1472 y Av. Teodoro Gómez (IBARRA - IMBABURA)"},
        {"id":4,"name":"ZONAL Nº 2","telefono":"(02) 3999333 Ext. 1003/1238/1059","direccion":"Calle: Quito y Chimborazo, edificio Azriel. Malecón de la ciudad (FRANCISCO DE ORELLANA - ORELLANA)"},
        {"id":5,"name":"ZONAL Nº 3","telefono":"(03) 2605961","direccion":"Calle: Av. Daniel León Borja y Jacinto Gonzáles esquina, en los altos del Banco del Pacifico tercer piso (RIOBAMBA - CHIMBORAZO)"},
        {"id":6,"name":"ZONAL Nº 3","telefono":"(03) 2821800 Ext. 2352","direccion":"Calle: Av. Daniel León Borja y Jacinto Gonzáles esquina, en los altos del Banco del Pacifico tercer piso (RIOBAMBA - CHIMBORAZO)"},
        {"id":7,"name":"ZONAL Nº 3","telefono":"23730594 Ext. 2331","direccion":"Calle: Av. Daniel León Borja y Jacinto Gonzáles esquina, en los altos del Banco del Pacifico tercer piso (RIOBAMBA - CHIMBORAZO)"},
        {"id":8,"name":"ZONAL Nº 3","telefono":"2884655 Ext. 2743","direccion":"Calle: Av. Daniel León Borja y Jacinto Gonzáles esquina, en los altos del Banco del Pacifico tercer piso (RIOBAMBA - CHIMBORAZO)"},
        {"id":9,"name":"ZONAL Nº 4","telefono":"(05) 3043711 Ext. 2550","direccion":"Calle: Calle Los Nardos y Av. 15 de Abril, detrás del ECU 911 Edificio Centro de Atención Ciudadana (CAC), Tercer piso (PORTOVIEJO - MANABÍ)"},
        {"id":10,"name":"ZONAL Nº 4","telefono":"(05) 3043734 Ext. 2550","direccion":"Calle: Calle Los Nardos y Av. 15 de Abril, detrás del ECU 911 Edificio Centro de Atención Ciudadana (CAC), Tercer piso (PORTOVIEJO - MANABÍ)"},
        {"id":11,"name":"ZONAL Nº 4","telefono":"(02) 2745726 Ext. 2200","direccion":"Calle: Calle Los Nardos y Av. 15 de Abril, detrás del ECU 911 Edificio Centro de Atención Ciudadana (CAC), Tercer piso (PORTOVIEJO - MANABÍ)"},
        {"id":12,"name":"ZONAL Nº 5","telefono":"(04) 2068508 Ext. 2406/2419/2414/2416","direccion":"Calle: Av. Francisco de Orellana y Justino Cornejo, Edificio del Gobierno del Litoral, piso 8 (GUAYAQUIL - GUAYAS)"},
        {"id":13,"name":"ZONAL Nº 5","telefono":"(04) 3728904 ","direccion":"Calle: Av. Francisco de Orellana y Justino Cornejo, Edificio del Gobierno del Litoral, piso 8 (GUAYAQUIL - GUAYAS)"},
        {"id":14,"name":"ZONAL Nº 5","telefono":"(05) 2739322 Ext. 2530 ","direccion":"Calle: Av. Francisco de Orellana y Justino Cornejo, Edificio del Gobierno del Litoral, piso 8 (GUAYAQUIL - GUAYAS)"},
        {"id":15,"name":"ZONAL Nº 5","telefono":"(03) 2983231 Ext. 2382","direccion":"Calle: Av. Francisco de Orellana y Justino Cornejo, Edificio del Gobierno del Litoral, piso 8 (GUAYAQUIL - GUAYAS)"},
        {"id":16,"name":"ZONAL Nº 6","telefono":"(07) 2884944 Ext. 2701/2707","direccion":"Calle: Bolivar 1260 y Juan Montalvo, casa del coco (CUENCA - AZUAY)"},
        {"id":17,"name":"ZONAL Nº 7","telefono":"(07) 2572964 Ext. 2770/2769/2768 ","direccion":"Calle Quito y Sucre esquina. (LOJA - LOJA)"},
        {"id":18,"name":"ZONAL Nº 7","telefono":"(07) 2606466 Ext. 2775 ","direccion":"Calle Quito y Sucre esquina. (LOJA - LOJA)"},
        {"id":19,"name":"ZONAL Nº 7","telefono":"(07) 2932 106 Ext. 2783","direccion":"Calle Quito y Sucre esquina. (LOJA - LOJA)"},
        {"id":20,"name":"ZONAL INSULAR ","telefono":"(05) 2526174 Ext. 2500/2505","direccion":"Calle: Av. Charles Binford y 12 de Febrero (PUERTO AYORA - GALÁPAGOS)"},
        {"id":21,"name":"ZONAL INSULAR ","telefono":"(05) 2527135 Ext. 2500/2505","direccion":"Calle: Av. Charles Binford y 12 de Febrero (PUERTO AYORA - GALÁPAGOS)"}]';

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