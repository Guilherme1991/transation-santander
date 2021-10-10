import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductUpdateComponent } from '../components/product/product-update/product-update.component';
import { TableComponent } from './table.component';

const routes: Routes = [
  {
    path: '',
    component: TableComponent
  },
  {
    path: 'product/:id',
    component: ProductUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
