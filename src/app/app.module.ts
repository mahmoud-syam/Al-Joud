import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
// To allow api access 
import { HttpClientModule } from '@angular/common/http';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgepasswordComponent } from './components/forgepassword/forgepassword.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    LoginComponent,
    CartComponent,
    FooterComponent,
    NotfoundComponent,
    NavbarComponent,
    ContactsComponent,
    AboutComponent,
    DetailsComponent,
    ProductComponent,
    CategoryComponent,
    CheckoutComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    NavAuthComponent,
    RegisterComponent,
    ForgepasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule ReactiveForm
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    RouterModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
