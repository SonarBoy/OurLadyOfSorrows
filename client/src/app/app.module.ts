import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { JoyfulComponent } from './Mysteries/joyful/joyful.component';
import { SorrowfulComponent } from './Mysteries/sorrowful/sorrowful.component';
import { GloriousComponent } from './Mysteries/glorious/glorious.component';
import { LuminousComponent } from './Mysteries/luminous/luminous.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './util-pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './util-pages/login/login.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';

import {AuthService} from '../app/service/auth.service';
import {JwtModule,JwtHelperService, JwtInterceptor} from '@auth0/angular-jwt';
import { PageNotFoundComponent } from './util-pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './util-pages/register/register.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { SayRosaryComponent } from './util-pages/say-rosary/say-rosary.component';


export function jwtTokenGetter(){
  return localStorage.getItem('id_token');
}



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JoyfulComponent,
    SorrowfulComponent,
    GloriousComponent,
    LuminousComponent,
    HomeComponent,
    LoginComponent,
    UserListComponent,
    UserDetailsComponent,
    UserDeleteComponent,
    PageNotFoundComponent,
    RegisterComponent,
    SayRosaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
