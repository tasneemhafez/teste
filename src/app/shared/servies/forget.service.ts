import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetService {

  constructor(private _HttpClient:HttpClient) { }
  forgetpassword(useremail:object):Observable <any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`, useremail)
  }


  resetcod(resetCode:object):Observable <any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,resetCode)
  }


  resetpassword(resetpassworddata:object):Observable <any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,resetpassworddata)
  }
  
}
