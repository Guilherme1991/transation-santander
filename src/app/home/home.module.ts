import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { ValidationsComponent } from '../components/validations/validations.component';
import { CardComponent } from '../components/card/card.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [HomeComponent, ValidationsComponent, CardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class HomeModule { }
