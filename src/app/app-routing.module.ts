import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { EventComponent } from './components/event/event.component';
import { HomeComponent } from './components/home/home.component';
import { Homev1Component } from './components/homev1/homev1.component';
import { LocationComponent } from './components/location/location.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProduitComponent } from './components/produit/produit.component';
import { RegisterComponent } from './components/register/register.component';
import { SingleComponent } from './components/single/single.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CategorieComponent } from './components/admin/categorie/categorie.component';
import { Produit1Component } from './components/admin/produit1/produit1.component';
import { Contact1Component } from './components/admin/contact1/contact1.component';
import { Commande1Component } from './components/admin/commande1/commande1.component';
import { Resrvation1Component } from './components/admin/resrvation1/resrvation1.component';
import { UserComponent } from './components/admin/user/user.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'homev1',component:Homev1Component},
  {path:'contact',component:ContactComponent},
  {path:'location',component:LocationComponent},
  {path:'menu',component:MenuComponent},
  {path:'produit',component:ProduitComponent},
  {path:'event',component:EventComponent},
  {path:'single',component:SingleComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'about',component:AboutComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'reservation',component:ReservationComponent},
  {path:'admin',component:AdminComponent,
        children:[
          {path:'',component:CategorieComponent},
          {path:'produit1',component:Produit1Component},
          {path:'contact1',component:Contact1Component},
          {path:'commande1',component:Commande1Component},
          {path:'reservation1',component: Resrvation1Component},
          {path:'user',component: UserComponent},

        ]},
  {path:'profile',component:ProfileComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
