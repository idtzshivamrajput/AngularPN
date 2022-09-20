import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'Brands',
    component:BrandsComponent
  },
  {
    path:'Career',
    component:CareerComponent
  },
  {
    path:'Press',
    component:HomeComponent
  },
  {
    path:'Contact',
    component:ContactComponent
  },
  {
    path:'ourteam',
    component:OurTeamComponent
  },
  {
    path:"view/:id",
    component:ViewComponent
  },
  {
    path:"edit/:id",
    component:EditComponent

  },
  {
    path:"**",
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
