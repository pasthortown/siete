import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { PayService } from 'src/app/services/CRUD/FINANCIERO/pay.service';
import { Pay } from 'src/app/models/FINANCIERO/Pay';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent implements OnInit {
  desde: Date = new Date();
  hasta: Date = new Date();
  archivo = {tipo: '', nombre: '', contenido: ''};
  reporte = '<strong><h3 class="col-12 text-center">REPORTE</h3></strong><br/><strong>Filas subidas:</strong><br/>5<br/><strong>Pagos actualizados:</strong><br/>5<br/>';

  constructor(private toastr: ToastrManager, private payDataService: PayService) {}

  ngOnInit() {}

  CodificarArchivoPagos(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
     const file = event.target.files[0];
     reader.readAsDataURL(file);
     reader.onload = () => {
        this.archivo.contenido = reader.result.toString().split(',')[1];
        this.archivo.tipo = file.type;
        this.archivo.nombre = file.name;
     };
    }
  }

  borrarArchivo() {
    this.archivo = {tipo: '', nombre: '', contenido: ''};
    this.toastr.errorToastr('Archivo borrado satisfactoriamente.', 'Procesar Pagos');
  }

  procesarArchivo() {
    this.toastr.successToastr('Datos procesados satisfactoriamente.', 'Procesar Pagos');
  }

  descargarReporte() {
    this.payDataService.get_report(this.desde, this.hasta).then( r => {
      const reportData = r as any[];
      console.log(reportData);
      let output = '';
      const localidad = '5'; // Guayaquil 1  -   Quito 5
      const transaccion = 'OCP'; // SIEMPRE OCP
      const codigo_servicio = 'ZG'; // OC= Orden de Cobro (Débito a Cuenta), ZG= Recaudación con Información (Recaudación a través de Canales con ingreso de información), SC= Recaudación de Colegios (Recaudación a través de Canales con o sin información).
      const tipo_cuenta = '00'; // 00= Cuenta Corriente, 10= Cuenta Ahorros
      const numero_cuenta = '        '; // SE DEJA EN BLANCO
      let valor = ''; // 13 ENTEROS 2 DECIMALES SIN PUNTO DECIMAL
      let codigo_del_tercero = ''; // 15 CARACTERES
      const referencia_transaccion = 'VALOR 1 POR 1000    '; // 20 CARACTERES
      const forma_de_pago = 'RE' // CU= Debito de cuenta, RE= Recaudaciones por canal electronico
      const moneda = 'USD' // SIEMPRE USD
      let nombre_del_tercero = ''; // 30 CARACTERES
      const localidad_retiro = '  '; // 2 CARACTERES NO APLICA DEJAR EN BLANCO
      const agencia_retiro = '  '; // 2 CARACTERES NO APLICA DEJAR EN BLANCO
      let tipo_nuc_tercero = ''; // C= Cedula, R= RUC, P= Pasaporte
      let numero_unico_tercero = ''; // 14 CARACTERES Identificacion del tercero
      const telefono_tercero = '0000000000'; // 10 CARACTERES Telefono del Tercero
      reportData.forEach(element => {
         valor = element.amount_to_pay.toString();
         valor = parseFloat(valor).toFixed(2).toString().replace('.', '');
         for( let i = 0; 15 - valor.length; i ++) {
           valor = '0' + valor;
         }
         output += localidad +
         transaccion +
         codigo_servicio +
         tipo_cuenta +
         numero_cuenta +
         valor +
         codigo_del_tercero +
         referencia_transaccion +
         forma_de_pago + moneda +
         nombre_del_tercero +
         localidad_retiro +
         agencia_retiro +
         tipo_nuc_tercero +
         numero_unico_tercero +
         telefono_tercero + '\n';
      });
      const blob = new Blob([output], { type: 'text/plain' });
      const nombreArchivo = 'reporte_pagos.txt';
      saveAs(blob, nombreArchivo);
    }).catch( e => console.log(e) );
  }

  downloadFile(file: any, type: any, name: any) {
     const byteCharacters = atob(file);
     const byteNumbers = new Array(byteCharacters.length);
     for (let i = 0; i < byteCharacters.length; i++) {
       byteNumbers[i] = byteCharacters.charCodeAt(i);
     }
     const byteArray = new Uint8Array(byteNumbers);
     const blob = new Blob([byteArray], { type: type });
     saveAs(blob, name);
  }
}
