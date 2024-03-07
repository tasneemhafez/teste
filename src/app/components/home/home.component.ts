import { WhislistService } from 'src/app/shared/servies/whislist.service';

import { Component, OnInit } from '@angular/core';
import { Category, Product } from 'src/app/shared/interface/product';
import { EcomdataService } from 'src/app/shared/servies/ecomdata.service';

import { CartserviesService } from 'src/app/shared/servies/cartservies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';


  @Component({
    selector: 'app-home',
    templateUrl:'./home.component.html',
    styleUrls: ['./home.component.css'],
    
  
})
export class HomeComponent  implements OnInit{
  constructor(private _EcomdataServic:EcomdataService , private _CartserviesService:CartserviesService, private _ToastrService:ToastrService, private _WhislistService:WhislistService){}
  products:Product[]=[]
  category:Category[]=[]
  whisdata:string []=[]
  searchTaerm:string=''
  
ngOnInit(): void {
  this._EcomdataServic.getAllProduact().subscribe({
    next:(response)=>{
     this.products=response.data
    }
  })
this._EcomdataServic.getCategoury().subscribe({
  next:(response)=>{
    this.category=response.data
    console.log(response)
  }
})
this._WhislistService.getwishlist().subscribe({
  next:(response)=>{
 const newData = response.data.map((item:any)=> item.product_id);
 this.whisdata=newData;
 
 
    console.log(response)}

})
}
CategoryOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  autoplay: true,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 6
    }
  },
  nav: true
}
mainSlider: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  autoplay: true,
 items:1,
  nav: true
}



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






