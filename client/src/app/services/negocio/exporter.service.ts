import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';

@Injectable({
   providedIn: 'root'
})
export class ExporterService {

   url = environment.api_exporter;
   options = new RequestOptions();

   constructor(private http: Http, private router: Router) {
      this.options.headers = new Headers();
      this.options.headers.append('api_token', sessionStorage.getItem('api_token'));
   }

   pdf_file(html: string, title: string, orientation: string, qr?: Boolean, qr_content?: string, params?: any[]) {
      let data = null;
      if(typeof qr != 'undefined') {
         if(typeof params != 'undefined') {
            data = {html: html, orientation: orientation, title: title, params: params, qr: qr, qr_content: qr_content};
         } else {
            data = {html: html, orientation: orientation, title: title, qr: qr, qr_content: qr_content};
         }
      } else {
         if(typeof params != 'undefined') {
            data = {html: html, orientation: orientation, title: title, params: params};
         } else {
            data = {html: html, orientation: orientation, title: title};   
         }
         
      }
      return this.http.post(this.url + 'download/pdf', JSON.stringify(data), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   excel_file(header: any[], body: any[]) {
      const data = {header: header, body: body};
      return this.http.post(this.url + 'download/excel_file', JSON.stringify(data), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   handledError(error: any) {
      console.log(error);
   }
}