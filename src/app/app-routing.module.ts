import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { Title } from '@angular/platform-browser';
import { DetailsComponent } from './components/details/details.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgepasswordComponent } from './components/forgepassword/forgepassword.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [

  // home component
  {
    path: '', component: BlankLayoutComponent, title: 'AlJoud', children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, title: 'AlJoud' },
      { path: 'contacts', component: ContactsComponent, title: 'Contacts' },
      { path: 'about', component: AboutComponent, title: 'About' },
      { path: 'details/:id', component: DetailsComponent, title: 'Details' },
      { path: 'product', component: ProductComponent, title: 'Product' },
      { path: 'products', component: ProductsComponent, title: 'All Products' },
      { path: 'forgetpassword', component: ForgepasswordComponent, title: 'ForgetPasword' },
      { path: 'category', component: CategoryComponent, title: 'Category' },
      { path: 'cart', component: CartComponent, title: 'Cart' },
    ]
  },

  // authintication component
  {
    path: '', component: AuthLayoutComponent, title: 'AlJoud ', children: [
      { path: 'login', component: LoginComponent, title: 'Login' },
      { path: 'register', component: RegisterComponent, title: 'register' },
      { path: 'checkout/:id', component: CheckoutComponent, title: 'Checkout' },
    ]
  },

  { path: '**', component: NotfoundComponent, title: 'Not Found | AlJoud' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
