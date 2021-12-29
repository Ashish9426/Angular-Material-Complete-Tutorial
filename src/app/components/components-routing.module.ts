import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonToggelComponent } from './button-toggel/button-toggel.component';

import { ButtonComponent } from './button/button.component';

const routes: Routes = [
  {path:'button', component:ButtonComponent},
  {path:'button-toggel', component:ButtonToggelComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
