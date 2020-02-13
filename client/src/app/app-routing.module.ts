import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JoyfulComponent } from './Mysteries/joyful/joyful.component';
import { SorrowfulComponent } from './Mysteries/sorrowful/sorrowful.component';
import { GloriousComponent } from './Mysteries/glorious/glorious.component';
import { LuminousComponent } from './Mysteries/luminous/luminous.component';
import { HomeComponent } from './util-pages/home/home.component';
import { LoginComponent } from './util-pages/login/login.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailsComponent} from './user/user-details/user-details.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';

const routes: Routes=[

  //Utils Pages.
  {path: 'home',component: HomeComponent},
  {path: 'login',component:LoginComponent, data: {title:'Login'}},

  //User Pages
  {path: 'Users', component:UserListComponent,data: {title:'Users'}},
  {path: 'Users/add', component:UserDetailsComponent, data: {title: 'Add User'}},
  {path: 'Users/delete/:id',component:UserDeleteComponent,data:{title:'Add Delete'}},

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
