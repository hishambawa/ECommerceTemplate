import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { FilterComponent } from './filter/filter.component';
import { FilterPipe } from './filter/filter.pipe';



@NgModule({
  declarations: [
  
    ListComponent,
       ItemComponent,
       FilterComponent,
       FilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent
  ]
})
export class ProductModule { }
