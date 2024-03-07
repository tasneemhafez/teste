import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/servies/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService, private _Router:Router,private _FormBuilder:FormBuilder){}
  messageErorr = "";
  isLoding:boolean=false;
  signForm:FormGroup =  this._FormBuilder.group({
    email:[null,[Validators.required,Validators.email]],
     password:[null,[Validators.required, Validators.pattern(/^\w{6,20}$/)]]
   })
  
  
    // signForm:FormGroup = new FormGroup({
      
    //   email: new FormControl(null,[Validators.required ,Validators.email]),
    //   password: new FormControl(null,[Validators.required, Validators.pattern(/^\w{6,20}$/)]),
    
    // });
    
  handelForm():void{
  console.log(this.signForm.value)
  this.isLoding =true;
  this._AuthService.setSign(this.signForm.value).subscribe({
  next:(response)=>{
     if (response.message == 'success') {
      this.isLoding =false;
      localStorage.setItem('etoken',response.token);
      this._AuthService.SaveUserData();
      this._Router.navigate(['/home']);
     }
      this._Router.navigate(['/home']);
    },
    error:(err:HttpErrorResponse)=>{
      this.isLoding =false;
    this.messageErorr=err.error.message;
    }
  }
  )
  
  }
  naigatBaack():void{
    this._Router.navigate(['/forgetpassword']);
    }
  }