import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationsComponent } from './validations/validations.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';
import { CardComponent } from './card/card.component';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [ValidationsComponent, ProductUpdateComponent, CardComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    ValidationsComponent,
    ProductUpdateComponent,
    CardComponent
  ]
})
export class ComponentsModule { }
