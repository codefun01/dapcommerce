import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsComponent } from './items.component';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ItemsComponent],
  imports: [CommonModule, HttpClientModule, MatGridListModule, MatCardModule],
})
export class ItemsModule { }
