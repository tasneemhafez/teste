import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetService } from 'src/app/shared/servies/forget.service';

@Component({
  selector: 'app-forgetpasswored',
  templateUrl: './forgetpasswored.component.html',
  styleUrls: ['./forgetpasswored.component.css']
})
export class ForgetpassworedComponent {
  constructor(private _Router:Router ,private _FormBuilder:FormBuilder,private _ForgetService:ForgetService){}
step1 :boolean = true;
step2 :boolean = false;
step3 :boolean = false;
email: string ='';
usermassge:string='';



forgetForm:FormGroup = new  FormGroup({
  email:  new FormControl('',[Validators.required,Validators.email]),
})



resetCode:FormGroup = new  FormGroup({
  resetCode: new FormControl('',[Validators.required]),
})


restpassword:FormGroup = new  FormGroup({
  // email:this.forgetForm.get('email')?.value ,
  newPassword: new FormControl('',[Validators.required, Validators.pattern(/^\w{6,20}$/)]),
})

forgetpassword():void{
  let useremail = this.forgetForm.value ;
  this.email =  useremail.email;
this._ForgetService.forgetpassword(useremail).subscribe({
  next:(res)=>{
console.log(res)
this.usermassge =res.message
this.step1 =false;
this.step2 =true;
  },
  error:(err)=> {
    this.usermassge =err.error.message

  },
})
}
resetCodenew():void{
let resetCode =this.resetCode.value
this._ForgetService.resetcod(resetCode).subscribe({
  next:(res)=>{
    console.log(res)
    this.usermassge =res.message
    this.step2 =false;
    this.step3 =true;
      },
      error:(err)=> {
        this.usermassge =err.error.message
    
      },
})
}
newpassword():void{
let restpaass = this.restpassword.value
restpaass.email=this.email
this._ForgetService.resetpassword(restpaass).subscribe({
  next:(res)=>{
 console.log(res)
 if (res.token) {
localStorage.setItem( '_token', res.token);
this._Router.navigate(['/home'])
 }
      },
      error:(err)=> {
        this.usermassge =err.error.message
    
      },
})
}
}
