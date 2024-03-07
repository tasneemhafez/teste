import { Component, OnInit } from '@angular/core';
import { CartserviesService } from 'src/app/shared/servies/cartservies.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements OnInit{
  constructor(private _CartserviesService:CartserviesService){}
  cartItems:any = {};
  

ngOnInit(): void {
  this._CartserviesService.getUserCart().subscribe({
next:(response)=>{
  console.log(response)
this.cartItems=response.data;
},
error:(error)=>console.log(error)

  })
}
removeCart(id:string):void{
  this._CartserviesService.deleteFromCart(id).subscribe({
    next:(response)=>{
      
      this.cartItems = response.data;
      
    }
  })
    }

    CangeCount(id:string, count:number):void{
      if(count >0){
      this._CartserviesService.updatecart(id ,count).subscribe({
        next:(response)=>{
          this.cartItems = response.data;
        },
        error:(error)=>console.log(error)
      })

    }

  }
  RemoveCart():void{
this._CartserviesService.ClaerCart().subscribe({
  next:(response)=>{
    this.cartItems = response;
    this._CartserviesService.CartNumber.next(0)
  },
  error:(error)=>console.log(error)
})
  }
}