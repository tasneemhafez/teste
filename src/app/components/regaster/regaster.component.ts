import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/servies/auth.service';
@Component({
  selector: 'app-regaster',
  templateUrl: './regaster.component.html',
  styleUrls: ['./regaster.component.css']
})
export class RegasterComponent {
  constructor(private _AuthService:AuthService, private _Router:Router ,private _FormBuilder:FormBuilder){}
messageErorr = "";
isLoding:boolean=false;
regesterForm:FormGroup = this._FormBuilder.group({
  name:['',[Validators.required ,Validators.minLength(3), Validators.maxLength(20)]],
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required, Validators.pattern(/^\w{6,20}$/)]],
  rePassword:['',[Validators.required,]],
  phone:['',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]]
}     , {validator :[this.confarimpasswerd]});
confarimpasswerd(group:FormGroup) :void{
  let password = group.get('password')
  let rePassword =  group.get('rePassword');

if (rePassword?.value == '') {
  rePassword?.setErrors({required:true})
} else  if(password?.value != rePassword?.value) {
  rePassword?.setErrors({mismatch:true})
    }
}



  // regesterForm:FormGroup = new FormGroup({
  //   name: new FormControl(null,[Validators.required ,Validators.minLength(3), Validators.maxLength(20)]),
  //   email: new FormControl(null,[Validators.required ,Validators.email]),
  //   password: new FormControl(null,[Validators.required, Validators.pattern(/^\w{6,20}$/)]),
  //   rePassword: new FormControl(null,[Validators.required, Validators.pattern(/^\w{6,20}$/)]),
  //   phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
  // });
handelForm():void{
console.log(this.regesterForm.value)
this.isLoding =true;
this._AuthService.setRegestar(this.regesterForm.value).subscribe({
next:(response)=>{
   if (response.message == 'success') {
    this._Router.navigate(['/login'])
    this.isLoding =false;
   }
  },
  error:(err:HttpErrorResponse)=>{
    this.isLoding =false;
  this.messageErorr=err.error.message;
  }
}
)

}
}
