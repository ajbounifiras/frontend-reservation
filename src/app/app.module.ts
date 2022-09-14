import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FileUploadModule } from 'ng2-file-upload';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Homev1Component } from './components/homev1/homev1.component';
import { ContactComponent } from './components/contact/contact.component';
import { LocationComponent } from './components/location/location.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProduitComponent } from './components/produit/produit.component';
import { EventComponent } from './components/event/event.component';
import { SingleComponent } from './components/single/single.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { AdminComponent } from './components/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { CategorieComponent } from './components/admin/categorie/categorie.component';
import { Produit1Component } from './components/admin/produit1/produit1.component';
import { Contact1Component } from './components/admin/contact1/contact1.component';
import { Commande1Component } from './components/admin/commande1/commande1.component';
import { Resrvation1Component } from './components/admin/resrvation1/resrvation1.component';
import { UserComponent } from './components/admin/user/user.component';






@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Homev1Component,
    ContactComponent,
    LocationComponent,
    MenuComponent,
    ProduitComponent,
    EventComponent,
    SingleComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    CheckoutComponent,
    ReservationComponent,
    AdminComponent,
    ProfileComponent,
    CategorieComponent,
    Produit1Component,
    Contact1Component,
    Commande1Component,
    Resrvation1Component,
    UserComponent,

   
 

  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  
    FileUploadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
