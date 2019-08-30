<div style="width:100%; float:left; margin-bottom: 20px;">
    <div style="width:50%; float:left; text-align: left;">
    </div>
</div>
<p>Estimado/a {{ $information['para'] }}:</p>
<p>Por favor cancele en cualquier agencia o cajero inteligente de Banco Pacífico a nivel nacional, el valor correspondiente a su contribución Uno por Mil, para mayor información contáctese con la Coordinación Zonal.</p>
<h3>DESCRIPCIÓN DE PAGO</h3>
<table style="border-collapse: collapse;width: 100%; border: 1px solid #ddd; text-align: left;">
    <tbody>
        <tr style="background-color: #f2f2f2;">
            <th>Contribución Uno por Mil:</th><td>{{ $information['amount_to_pay_base'] }}</td>
        </tr>
        <tr>
            <th>Multas:</th><td>{{ $information['amount_to_pay_fines'] }}</td>
        </tr>
        <tr style="background-color: #f2f2f2;">
            <th>Intereses: </th><td>{{ $information['amount_to_pay_taxes'] }}</td>
        </tr>
        <tr>
            <th>Total a pagar:</th><td><strong style="color: red">{{ $information['amount_to_pay'] }}</strong></td>
        </tr>
        <tr>
            <th>Códigos de las Órdenes de pago:</th><td>{{$information['payCodes']}}</td>
        </tr>
    </tbody>
</table>
<p><strong>El pago deberá hacerlo a partir del siguiente día laborable de la fecha que reciba esta notificación a su correo electrónico</strong>, únicamente debe acercarse a las ventanillas del Banco de Pacífico, dicte el número de RUC e  indique que realizará un pago al Ministerio de Turismo.</p>
<p>Si usted es usuario de Banco Pacífico y desea realizar el pago a través del sistema <strong>Intermático</strong>, los pasos son: </p>
<ol>
<li> Transferencias, pagos y recargas</li>
<li>Instituciones,</li>
<li>Seleccione Empresas,</li>
<li>MIN TURISMO; y </li>
<li>En el campo código: digite el número de RUC. </li>
</ol>
<br/>
<p><i><strong>Posterior al pago por favor entregue el comprobante en la Coordinación Zonal para que le certifiquen el comprobante y se le emita su factura.</strong></i></p><br/><br/>
<h3>INFORMACIÓN DEL ESTABLECIMIENTO</h3>
<table style="border-collapse: collapse;width: 100%;border: 1px solid #ddd; text-align:left;">
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
</table>
<h3>INFORMACIÓN DE LA COORDINACIÓN ZONAL</h3>
<table style="border-collapse: collapse;width: 100%;border: 1px solid #ddd;">
    <tbody>
        <tr style="background-color: #f2f2f2;">
            <th>Dirección:</th><td>{{ $information['czDireccion'] }}</td>
        </tr>
        <tr style="background-color: #f2f2f2;">
            <th>Teléfono:</th><td>{{ $information['czTelefono'] }}</td>
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