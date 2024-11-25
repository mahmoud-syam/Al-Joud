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

const routes: Routes = [

  // home component
  {
    path: '', component: BlankLayoutComponent, title: 'AlJoud | Home', children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, title: 'AlJoud | Home' },
      { path: 'contacts', component: ContactsComponent, title: 'AlJoud | Contacts' },
      { path: 'about', component: AboutComponent, title: 'AlJoud | About' },
      { path: 'details/:id', component: DetailsComponent, title: 'AlJoud | Details' },
      { path: 'product', component: ProductComponent, title: 'AlJoud | Product' },
      { path: 'forgetpassword', component: ForgepasswordComponent, title: 'ForgetPasword' },
      { path: 'category', component: CategoryComponent, title: 'AlJoud | Category' },
      { path: 'cart', component: CartComponent, title: 'AlJoud | Cart' },
    ]
  },

  // authintication component
  {
    path: '', component: AuthLayoutComponent, title: 'AlJoud | Home', children: [
      { path: 'login', component: LoginComponent, title: 'AlJoud | Login' },
      { path: 'register', component: RegisterComponent, title: 'AlJoud | register' },
      { path: 'checkout/:id', component: CheckoutComponent, title: 'AlJoud | Checkout' },
    ]
  },

  { path: '**', component: NotfoundComponent, title: 'Not Found | AlJoud' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
