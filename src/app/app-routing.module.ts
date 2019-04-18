import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent} from './contact/contact.component';


const routes: Routes = [
  {
    path:'AboutMe',
    component: AboutMeComponent
  },
  {
    path:'Contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
