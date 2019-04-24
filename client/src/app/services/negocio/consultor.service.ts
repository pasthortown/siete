import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';

@Injectable({
   providedIn: 'root'
})
export class ConsultorService {

   url = environment.api_consultor;
   options = new RequestOptions();

   constructor(private http: Http, private router: Router) {
      this.options.headers = new Headers();
      this.options.headers.append('api_token', sessionStorage.getItem('api_token'));
   }

   get_registers(filterIdLocation: number, filterState: number): Promise<any> {
      const data = {'filterIdLocation': filterIdLocation, 'filterState': filterState};
      return this.http.post(this.url + 'registers', JSON.stringify(data), this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json());  });
   }

   handledError(error: any) {
      console.log(error);
   }
}