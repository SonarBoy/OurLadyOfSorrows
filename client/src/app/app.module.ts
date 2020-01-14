import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { JoyfulComponent } from './Mysteries/joyful/joyful.component';
import { SorrowfulComponent } from './Mysteries/sorrowful/sorrowful.component';
import { GloriousComponent } from './Mysteries/glorious/glorious.component';
import { LuminousComponent } from './Mysteries/luminous/luminous.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './util-pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JoyfulComponent,
    SorrowfulComponent,
    GloriousComponent,
    LuminousComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
