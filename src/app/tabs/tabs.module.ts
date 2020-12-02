import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ItemsModule } from '../items/items.module';
import { StoreModule } from '../store/store.module';
import { ItemsComponent } from '../items/items.component';
import { StoreComponent } from '../store/store.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    ItemsModule,
    StoreModule,
    RouterModule.forChild([
      { path: '', component: TabsComponent, children: [
        { path: '', pathMatch: 'full', redirectTo: 'items' },
        { path: 'items', component: ItemsComponent, data: { label: 'Items' } },
        { path: 'store', component: StoreComponent, data: { label: 'Store' } }
      ] }
    ]) 
  ]
})
export class TabsModule { }
