import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadgesComponent } from './badges/badges.component';
import { ButtonToggelComponent } from './button-toggel/button-toggel.component';

import { ButtonComponent } from './button/button.component';
import { IconsComponent } from './icons/icons.component';

const routes: Routes = [
  {path:'button', component:ButtonComponent},
  {path:'button-toggel', component:ButtonToggelComponent},
  {path:'icons', component:IconsComponent},
  {path:'badges', component:BadgesComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
