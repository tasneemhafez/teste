import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/interface/product';
import { WhislistService } from 'src/app/shared/servies/whislist.service';


@Component({
  selector:'app-whishlista',
  templateUrl:'./whishlista.component.html',
  styleUrls: ['./whishlista.component.css']
})
export class WhishlistaComponent implements OnInit {
  // :any ={};
  products:Product[]=[]
constructor(private _WhislistService:WhislistService,private _ToastrService:ToastrService,){}
ngOnInit(): void {
this._WhislistService.getwishlist().subscribe({
  next:(response)=>{
console.log(response.data)
this.products= response.data;
  },
  error: (error)=>{
    console.log(error)}
})
}
removeCart(id:string|undefined):void{
this._WhislistService.deletwhis(id).subscribe({
  next:(response)=>{
   this.products = response.data
   this._ToastrService.success(response.message);
   this._WhislistService.getwishlist().subscribe({
    next:(response)=>{
      this.products =response.data;
    }
   })
//  const newdata = this.products.filter((item:any)=>  this.products.includes(item._id))
//  this.products =newdata ;
 
  },
  error:(err) =>{
    console.log(err);
  },
})
}

addToCart(id:string):void{
  this._WhislistService.addcart(id).subscribe({
    next:(response)=>{
      console.log(response);
      this._WhislistService.CartNumber.next(response.numOfCartItems)
      this._ToastrService.success(response.message);
    },
    error:(error)=>{
      console.log(error)
  },

});
}
}
