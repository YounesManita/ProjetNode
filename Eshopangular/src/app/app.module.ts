import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importez FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { SalleComponent } from './pages/salle/salle.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ResetComponent } from './pages/reset/reset.component';
import { EmailComponent } from './pages/email/email.component';
import { CompteComponent } from './pages/compte/compte.component';
import { HomeComponent } from './pages/home/home.component';
import { DispoSalleComponent } from './dispo-salle/dispo-salle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//import { CalendierReservationModule } from './calendier-reservation/calendier-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SalleComponent,
    ReservationComponent,
    LoginComponent,
    ProfilComponent,
    SignupComponent,
    ResetComponent,
    EmailComponent,
    CompteComponent,
    HomeComponent,
    DispoSalleComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
