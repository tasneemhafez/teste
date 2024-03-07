import { Category } from './../../shared/interface/product';

import { Component, OnInit } from '@angular/core';

import { CatogaryService } from 'src/app/shared/servies/catogary.service';

@Component({
  selector: 'app-catacory',
  templateUrl: './catacory.component.html',
  styleUrls: ['./catacory.component.css']
})
export class CatacoryComponent implements OnInit {
constructor(private _CatogaryService:CatogaryService){}

category:Category[]=[]
ngOnInit(): void {
  this._CatogaryService.getAllCategory().subscribe({
  
  next:(response:any)=>{
   
    this.category = response.data
    console.log(response)
   
},
error:(error)=>{
  console.log(error)
}
  })
}}

 