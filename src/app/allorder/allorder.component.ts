import { Component, OnInit } from '@angular/core';
import { CartserviesService } from '../shared/servies/cartservies.service';
import { AsyncScheduler } from 'rxjs/internal/scheduler/AsyncScheduler';
import { AsyncPipe } from '@angular/common';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allorder',
  templateUrl: './allorder.component.html',
  styleUrls: ['./allorder.component.css']
})
export class AllorderComponent  implements OnInit{
  orders: any[] = [];
  userData:any; 

  constructor(private cartService: CartserviesService,private _Router:Router) { }


  

   myToken:any={ token:localStorage.getItem('etoken')}
  ngOnInit(): void {
    if(localStorage.getItem('etoken')!= null){
      let encodetoken:any =localStorage.getItem('etoken')
       let decodeToken=   jwtDecode(encodetoken)
       this.userData = decodeToken ;
      

  }

  this.cartService.GetOrderDetails(this.userData.id).subscribe({
    next:(response)=>{
console.log(response)
this.orders = response
    }
  })



  }
  naigatBaack():void{
    this._Router.navigate(['/home']);
    }

}
