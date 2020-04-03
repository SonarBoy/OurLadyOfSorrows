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
import { PageNotFoundComponent } from './util-pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './util-pages/register/register.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { SayRosaryComponent } from './util-pages/say-rosary/say-rosary.component';

const routes: Routes=[

  //Utils Pages.
  {path: '/',component: HomeComponent},
  {path: 'home',component: HomeComponent},
  {path: 'login',component:LoginComponent, data: {title:'Login'}},
  {path: 'register', component:RegisterComponent, data:{title:'register'}},


  //User Pages
  {path: 'Users', component:UserListComponent,data: {title:'Users'},canActivate:[AuthGuardGuard]},
  {path: 'Users/add', component:UserDetailsComponent, data: {title: 'Add User'},canActivate:[AuthGuardGuard]},
  {path: 'Users/delete/:id',component:UserDeleteComponent,data:{title:'Add Delete'},canActivate:[AuthGuardGuard]},

  //Mysteries
  {path: 'joyful',component: JoyfulComponent},
  {path: 'sorrowful',component: SorrowfulComponent},
  {path: 'glorious',component: GloriousComponent},
  {path: 'luminous',component: LuminousComponent},
  {path: 'Rosary',component: SayRosaryComponent},

  
  {path:'**',component: PageNotFoundComponent, pathMatch: 'full'}




  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
