import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { ProductUpdateComponent } from '../components/product/product-update/product-update.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TableComponent, ProductUpdateComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class TableModule { }
