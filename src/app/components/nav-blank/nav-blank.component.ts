 import { Component, OnInit } from '@angular/core';
import { AuthLayoutComponent } from '../auth-layout/auth-layout.component';
import { AuthService } from 'src/app/shared/servies/auth.service';
import { CartserviesService } from 'src/app/shared/servies/cartservies.service';
import { WhishlistaComponent } from '../whishlista/whishlista.component';
import { WhislistService } from 'src/app/shared/servies/whislist.service';

@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css']
})
export class NavBlankComponent implements OnInit{
  constructor(private _AuthService:AuthService, private _CartserviesService: CartserviesService, private _WhislistService:WhislistService) {}
  cartnum:number = 0;


  logoutuser(): void {
    this._AuthService.logoutuser();
  }
  
  ngOnInit() {
    this._CartserviesService.CartNumber.subscribe({
      next:(data)=>
      this.cartnum = data


    });
    this._WhislistService.CartNumber.subscribe({
      next:(data)=>
      this.cartnum = data
    })
    this._CartserviesService.getUserCart().subscribe({
      next: (response) => {
this.cartnum= response.numOfCartItems;
      }
    })

    this._WhislistService.getUserCart().subscribe({
      next: (response) => {
this.cartnum= response.numOfCartItems;
      }
    })
}




}