import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsRoutingModule } from './components-routing.module';
import { MaterialModule } from '../material/material.module';
import { ButtonComponent } from './button/button.component';





@NgModule({
  declarations: [ButtonComponent,],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MaterialModule,
    FormsModule
    
  ]
})
export class ComponentsModule { }
