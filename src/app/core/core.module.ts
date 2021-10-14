import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterContentPipe } from './pipes/filter-content.pipe';



@NgModule({
  declarations: [
    FilterContentPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterContentPipe
  ]
})
export class CoreModule { }
