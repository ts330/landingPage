import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';

const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component:HomepageComponent},
  {path:'about',component:AboutpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
