import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatogaryService {

  constructor(private _HttpClient:HttpClient) { }

  getAllCategory(){
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories')
  }
}
