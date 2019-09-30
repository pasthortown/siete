import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';

@Injectable({
   providedIn: 'root'
})
export class AccountService {

   url = environment.api_auth;
   options = new RequestOptions();

   constructor(private http: Http, private router: Router) {
      this.options.headers = new Headers();
      this.options.headers.append('api_token', sessionStorage.getItem('api_token'));
   }

   get_accounts(): Promise<any> {
      return this.http.get(this.url + 'get_accounts', this.options).toPromise()
      .then( r => {
         return r.json();
      }).catch( error => { this.handledError(error.json()); });
   }

   block_account(account) {
      console.log(account);
   }

   save_account(account) {
      console.log(account);
   }
   
   password_reset_account(account) {
      console.log(account); 
   }

   handledError(error: any) {
      console.log(error);
   }
}