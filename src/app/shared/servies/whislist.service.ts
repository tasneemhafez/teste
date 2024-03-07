import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhislistService {

  constructor(private _HttpClient:HttpClient) { }
CartNumber:BehaviorSubject<number> = new BehaviorSubject(0);
  myToken:any={ token:localStorage.getItem('etoken')}
addwishlist(productid:string):Observable<any>{
return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,
{
  productId: productid
},
{
  headers:this.myToken
}


)
}

getwishlist():Observable <any>{
return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
  headers:this.myToken
})
}
deletwhis(id:string|undefined):Observable <any>{
return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{
  headers:this.myToken
})
}
addcart(productid:string):Observable<any>{
  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',
  {
    productId: productid
  },
  {
    headers:this.myToken
  }
  
  )}
  getUserCart():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart',{
     headers:this.myToken
    })
  }

}