import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProudactsComponent } from './components/products/proudacts.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CatacoryComponent } from './components/categories/catacory.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegasterComponent } from './components/regaster/regaster.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DetailsComponent } from './components/details/details.component';
import { NavBlankComponent } from './components/nav-blank/nav-blank.component';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule }from '@angular/common/http'
import { CarouselModule } from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule} from'@angular/platform-browser/animations';
import { SearchPipe } from './search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { WhishlistaComponent } from './components/whishlista/whishlista.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './intersaptor/loading.interceptor';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllorderComponent } from './allorder/allorder.component';
import { ForgetpassworedComponent } from './setting/forgetpasswored/forgetpasswored.component';
import { MyHttpInterceptor } from './my-http.interceptor';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProudactsComponent,
    BrandsComponent,
    CatacoryComponent,
    FooterComponent,
    LoginComponent,
    RegasterComponent,
    NotfoundComponent,
    DetailsComponent,
    NavBlankComponent,
    NavAuthComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    SearchPipe,
    WhishlistaComponent,
  
    CheckoutComponent,
       AllorderComponent,
       ForgetpassworedComponent,
       ForgetPasswordComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(),
  
    NgxSpinnerModule
   
   
    

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:MyHttpInterceptor,multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
