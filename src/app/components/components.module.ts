import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationsComponent } from './validations/validations.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';

@NgModule({
  declarations: [ValidationsComponent, ProductUpdateComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ValidationsComponent,
    ProductUpdateComponent
  ]
})
export class ComponentsModule { }
