<div style="width:100%; float:left; margin-bottom: 20px;">
    <div style="width:50%; float:left; text-align: left;">
    </div>
</div>
<p>Estimado/a {{ $information['para'] }}:</p>
<p>Ha recibido una solicitud de {{ $information['tramite'] }} que ha sido asignada por su Coordinador Zonal, por favor revise su bandeja en la plataforma SITURIN.</p>
<h3>INFORMACIÓN DEL ESTABLECIMIENTO</h3>
<table style="border-collapse: collapse;width: 100%; border: 1px solid #ddd; text-align: left;">
    <tbody>
        <tr style="background-color: #f2f2f2;">
            <th>RUC:</th><td>{{ $information['ruc'] }}</td><th>Provincia:</th><td>{{ $information['provincia'] }}</td>
        </tr>
        <tr>
            <th>Nombre Comercial:</th><td>{{ $information['nombreComercial'] }}</td><th>Cantón:</th><td>{{ $information['canton'] }}</td>
        </tr>
        <tr style="background-color: #f2f2f2;">
            <th>Fecha Solicitud:</th><td>{{ $information['fechaSolicitud'] }}</td><th>Parroquia:</th><td>{{ $information['parroquia'] }}</td>
        </tr>
        <tr>
            <th>Actividad:</th><td>{{ $information['actividad'] }}</td><th>Calle Principal:</th><td>{{ $information['callePrincipal'] }}</td>
        </tr>
        <tr style="background-color: #f2f2f2;">
            <th>Clasificación:</th><td>{{ $information['clasificacion'] }}</td><th>Calle Intersección:</th><td>{{ $information['calleInterseccion'] }}</td>
        </tr>
        <tr>
            <th>Categoría:</th><td>{{ $information['categoria'] }}</td><th>Numeración:</th><td>{{ $information['numeracion'] }}</td>
        </tr>
        <tr style="background-color: #f2f2f2;">
            <th>Tipo de Solicitud:</th><td>{{ $information['tipoSolicitud'] }}</td><th></th><td></td>
        </tr>
    </tbody>
</table><br/><br/>
<div style="width:100%; float:left;" >
    <div style="width:25%; float:left;">&nbsp;</div>
    <div style="width:50%; float:left;">
        <div style="width:100%; text-align:center;border-top: 1px solid;border-image: -webkit-linear-gradient(left, #E18728, #BE4C39 33%, #9351A6 66%, #4472B9,#4CA454,#D49B00) 2%; border-image: -ms-linear-gradient(left, #E18728, #BE4C39 33%, #9351A6 66%, #4472B9,#4CA454,#D49B00) 2%; border-image: -moz-linear-gradient(left, #E18728, #BE4C39 33%, #9351A6 66%, #4472B9,#4CA454,#D49B00) 2%;">
           <small>MINISTERIO DE TURISMO @ {{ $information['thisYear'] }}<br/>Dirección de Tecnologías de la Información y Comunicaciones</small>
        </div>
    </div>
</div>