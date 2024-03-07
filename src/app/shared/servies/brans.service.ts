import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BransService {

  constructor(private _HttpClient:HttpClient) { }
  gerBrands(){
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/brands')
  }

  getbrandsDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
     }

}
