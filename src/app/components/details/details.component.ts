import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/app/shared/interface/product';
import { CartserviesService } from 'src/app/shared/servies/cartservies.service';
import { EcomdataService } from 'src/app/shared/servies/ecomdata.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent  implements OnInit{
constructor(private _ActivatedRoute:ActivatedRoute,private _EcomdataService:EcomdataService, private _CartserviesService:CartserviesService,private _ToastrService:ToastrService){}
prouctslista :Product= {} as Product;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
  let Idproducts:any=      params.get('id')
  this._EcomdataService.getProduactDetails(Idproducts).subscribe({
    next:(respons)=>{
      this.prouctslista = respons.data;

    },
    
  });

      }

    },
    )};
    detailsOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots:true,
      navSpeed: 700,
      navText: ['', ''],
    
      items:1,
      nav: false
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


  }
  


