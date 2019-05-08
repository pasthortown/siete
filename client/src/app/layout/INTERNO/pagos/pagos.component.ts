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
      /*let output = 'id;created_at;updated_at;amount_payed;amount_to_pay;pay_date;payed;code;max_pay_date;ruc_id\n';
      reportData.forEach(element => {
         output += element.id + ';' + element.created_at + ';' + element.updated_at + ';' + element.amount_to_pay + ';' + element.pay_date + ';' + element.payed + ';' + element.code + ';' + element.max_pay_date + ';' + element.ruc_id + '\n';
      });
      const blob = new Blob([output], { type: 'text/plain' });
      const nombreArchivo = 'reporte_pagos.csv';
      saveAs(blob, nombreArchivo);*/
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
