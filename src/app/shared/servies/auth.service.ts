import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(private _HttpClient: HttpClient,private _Router:Router ) {}
  userData:any; //token
  logoutuser(): void {
    localStorage.removeItem('etoken');
    this._Router.navigate(['/login']);

}




SaveUserData(){
if(localStorage.getItem('etoken')!= null){
let encodetoken:any =localStorage.getItem('etoken')
 let decodeToken=   jwtDecode(encodetoken)
 this.userData = decodeToken ;

}
}



  setRegestar(userData: object): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup', userData);
  }
  setSign(userData: object): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin', userData);
  }
}