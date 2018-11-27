import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './../components/components.module';

import { DirectivesModule } from './../directives/directives.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    CommonModule,
    FormsModule,
    DirectivesModule,
    ComponentsModule
  ],
  entryComponents: [

  ]
})
export class SharedModule {}