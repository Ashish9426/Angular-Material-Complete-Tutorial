import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsRoutingModule } from './components-routing.module';
import { MaterialModule } from '../material/material.module';
import { ButtonComponent } from './button/button.component';
import { ButtonToggelComponent } from './button-toggel/button-toggel.component';
import { IconsComponent } from './icons/icons.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SidenavComponent } from './sidenav/sidenav.component';





@NgModule({
  declarations: [
    ButtonComponent, 
    ButtonToggelComponent, 
    IconsComponent, 
    BadgesComponent,
    ProgressSpinnerComponent, 
    NavbarComponent, 
    ProgressBarComponent, 
    SidenavComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MaterialModule,
    FormsModule
    
  ]
})
export class ComponentsModule { }
