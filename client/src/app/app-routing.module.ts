import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JoyfulComponent } from './Mysteries/joyful/joyful.component';
import { SorrowfulComponent } from './Mysteries/sorrowful/sorrowful.component';
import { GloriousComponent } from './Mysteries/glorious/glorious.component';
import { LuminousComponent } from './Mysteries/luminous/luminous.component';
import { HomeComponent } from './util-pages/home/home.component';

const routes: Routes=[
  {path: 'home',component: HomeComponent},
  //Mysteries
  {path: 'joyful',component: JoyfulComponent},
  {path: 'sorrowful',component: SorrowfulComponent},
  {path: 'glorious',component: GloriousComponent},
  {path: 'luminous',component: LuminousComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
