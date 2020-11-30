import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path:'**',component:HomeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  providers:[],
  bootstrap:[],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
