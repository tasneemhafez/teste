import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviesService {

  constructor(private _HttpClient:HttpClient) { }

CartNumber:BehaviorSubject<number> = new BehaviorSubject(0);


  myToken:any={ token:localStorage.getItem('etoken')}
addcart(productid:string):Observable<any>{
return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',
{
  productId: productid
},
{
  headers:this.myToken
}


)
}


  getUserCart():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart',{
     headers:this.myToken
    })
  }
  


 deleteFromCart(productid:string):Observable<any>{
  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productid}`,{
    headers:this.myToken
  })

  }

  updatecart(productid:string, Newcount:number):Observable<any>{
return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productid}`,
{
  count: Newcount
},
{
  headers:this.myToken
}

)

}

ClaerCart():Observable<any>{
 return    this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
 {
headers:this.myToken
 }
 
 
 )
}
Checkout(id:string,userData:object):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
  
  {
    shippingAddress: userData
     
        
},
{
  headers:this.myToken
}
  
  
  
  
  )
}
GetOrderDetails(id:string):Observable<any>{
  
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`);

}


}

  
  
