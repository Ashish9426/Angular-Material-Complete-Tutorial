import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsRoutingModule } from './components-routing.module';
import { MaterialModule } from '../material/material.module';
import { ButtonComponent } from './button/button.component';
import { ButtonToggelComponent } from './button-toggel/button-toggel.component';





@NgModule({
  declarations: [ButtonComponent, ButtonToggelComponent,],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MaterialModule,
    FormsModule
    
  ]
})
export class ComponentsModule { }
