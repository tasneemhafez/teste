import { authGuard } from './shared/guards/auth.guard';
import { CurrencyPipe } from '@angular/common';
import { RouterLinkActive} from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { HomeComponent } from './components/home/home.component';
import { CatacoryComponent } from './components/categories/catacory.component';
import { BrandsComponent } from './components/brands/brands.component';
import { DetailsComponent } from './components/details/details.component';
import { ProudactsComponent } from './components/products/proudacts.component';
import { LoginComponent } from './components/login/login.component';
import { RegasterComponent } from './components/regaster/regaster.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { WhishlistaComponent } from './components/whishlista/whishlista.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllorderComponent } from './allorder/allorder.component';
import { ForgetpassworedComponent } from './setting/forgetpasswored/forgetpasswored.component';

const routes: Routes = [
  {path:'',canActivate:[authGuard],
  


  component: BlankLayoutComponent, 
  
  children:[

    { path:'', redirectTo:'home', pathMatch:"full" } ,
{path:"home",component:HomeComponent},
{path:"cart", component :CartComponent},
{path:"brands", component: BrandsComponent},
{path:"details/:id", component:DetailsComponent},
{path:"categories", component:CatacoryComponent},
{path:"products",component:ProudactsComponent},
{path:"whishlista",component:WhishlistaComponent},
{path:"checkout/:id",component:CheckoutComponent},
{path:"allorders", component:AllorderComponent},
{path:"forgetpassword",component:ForgetpassworedComponent},

]},
  {path:'',component: AuthLayoutComponent ,children:[
    {path:"login",component:LoginComponent},
    {path:"regaster",component:RegasterComponent},
    {path:"login/:forgetpassword",component:ForgetpassworedComponent},
  ]},
  {path:'**' ,component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
