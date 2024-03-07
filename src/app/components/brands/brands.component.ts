import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/shared/interface/product';
import { BransService } from 'src/app/shared/servies/brans.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{
  constructor(private _BransService:BransService){}
  brands:Brand [] = []
  brandname: string = '';
  brandimge: string ='';

ngOnInit(): void {
  this._BransService.gerBrands().subscribe({
    next:(response:any)=>{
      console.log(response)
      this.brands= response.data;
    },
    error:(err)=>{
console.log(err)
    }
  })

}
getdetelis(id:string):void{
  this._BransService.getbrandsDetails(id).subscribe({
    next: (response)=> {
     this.brandname =response.data.name;
     this.brandimge = response.data.image;
      console.log(response)
    },
    error:(err)=> {
      console.log(err)
    },
  })
  }
}





// this._BransService.getbrandsDetails(id).subscribe({
//   next: (response)=> {
//    this.brands =response.data
//     console.log(response)
//   },
//   error(err) 
//     console.log(err)
//   },
// })