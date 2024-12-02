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
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgepasswordComponent } from './components/forgepassword/forgepassword.component';
import { ToastrModule } from 'ngx-toastr';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// tranlslation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './Shared/interceptors/loading.interceptor';
import { AuthInterceptor } from './Shared/interceptors/auth.interceptor';
import { ProductsComponent } from './components/products/products.component';


// tranlslation
export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}

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
    ForgepasswordComponent,
    ProductsComponent
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
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    // tranlslation
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [ 
    {provide:HTTP_INTERCEPTORS , useClass:LoadingInterceptor , multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } ,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
