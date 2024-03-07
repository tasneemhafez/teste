import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartserviesService } from 'src/app/shared/servies/cartservies.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
constructor(private _FormBuilder:FormBuilder, private  _ActivatedRoute:ActivatedRoute , private _CartserviesService:CartserviesService){}

 chekout:FormGroup = this._FormBuilder.group({
 
  details:new FormControl('' ,[Validators.required]),
  phone:new FormControl('' ,[Validators.required]),
  city:new FormControl('' ,[Validators.required])
})
cartid: any =''
 ngOnInit(): void {
   this._ActivatedRoute.paramMap.subscribe({
     next:(params)=>{
 this.cartid = params.get('id')
     },
     error(err) {
       console.log(err);
     },
   })
 }
 handelform():void{
 console.log(this.chekout.value)
 this._CartserviesService.Checkout(this.cartid,this.chekout.value).subscribe({
  next:(res)=> {
  if(res.status == "success"){
 window.open(res.session.url ,  "_self");
  }
  }
  })
 }
 }







