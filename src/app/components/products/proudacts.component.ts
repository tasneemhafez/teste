import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/interface/product';
import { CartserviesService } from 'src/app/shared/servies/cartservies.service';
import { EcomdataService } from 'src/app/shared/servies/ecomdata.service';

import { ProductService } from 'src/app/shared/servies/product.service';
import { WhislistService } from 'src/app/shared/servies/whislist.service';

@Component({
  selector: 'app-proudacts',
  templateUrl: './proudacts.component.html',
  styleUrls: ['./proudacts.component.css']
})
export class ProudactsComponent implements OnInit {
constructor(private _ProductService:ProductService,private _EcomdataServic:EcomdataService , private _CartserviesService:CartserviesService, private _ToastrService:ToastrService, private _WhislistService:WhislistService){}
products:Product[]=[]
whisdata:string []=[]
searchTaerm:string=''
 ngOnInit(): void {
   this._ProductService.getAllProudact().subscribe({
next:(response)=>
this.products = response.data
   })
  
   this._WhislistService.getwishlist().subscribe({
    next:(response)=>{
   const newData = response.data.map((item:any)=> item.product_id);
   this.whisdata=newData;
   
   
      console.log(response)}
  

 }
 
   )}
   addToCart(id:string):void{
    this._CartserviesService.addcart(id).subscribe({
      next:(response)=>{
        console.log(response);
        this._CartserviesService.CartNumber.next(response.numOfCartItems)
        this._ToastrService.success(response.message);
      },
      error:(error)=>{
        console.log(error)
    },
  
  });
  
  
  }
  addlist(id:string):void{
  this._WhislistService.addwishlist(id).subscribe({
    next:(response)=>{
      console.log(response);
      this._ToastrService.success(response.message);
      this.whisdata = response.data;
    },
    
  })
  }
  removewhishlist(proudid:string):void{
  this._WhislistService.deletwhis(proudid).subscribe({
    next:(response)=>{
      console.log(response);
      this._ToastrService.success(response.message);
      this.whisdata = response.data;
    },
  })
  }
  }
  
  
  
  

