import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadgesComponent } from './badges/badges.component';
import { ButtonToggelComponent } from './button-toggel/button-toggel.component';

import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { ChechBoxComponent } from './chech-box/chech-box.component';
import { ChipsComponent } from './chips/chips.component';
import { IconsComponent } from './icons/icons.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  {path:'button', component:ButtonComponent},
  {path:'button-toggel', component:ButtonToggelComponent},
  {path:'icons', component:IconsComponent},
  {path:'badges', component:BadgesComponent},
  {path:'progress-spinner', component:ProgressSpinnerComponent},
  {path:'progress-bar', component:ProgressBarComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'sidenav', component:SidenavComponent},
  {path:'card', component:CardComponent},
  {path:'chech-box', component:ChechBoxComponent},
  {path:'chips', component:ChipsComponent},
  {path:'menu', component:MenuComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
