import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoresService } from '../stores.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  providers: [StoresService]
})
export class StoreComponent implements OnInit {

  subscription: Subscription;
  stores: any[];
  constructor(private storeService: StoresService) { }
  searchText = '';
  ngOnInit(): void {
    this.getStores();
  }

  getStores(): void {
    this.subscription = this.storeService.getStores().subscribe({
      next: this.handleSuccess.bind(this),
      error: this.handleError.bind(this)
    });
  }

  handleSuccess(response: any): void {
    if (response.content && response.content.length) {

      this.stores = _(_.sortBy(_.map(response.content, _.partialRight(_.pick, ['name','icon'])), [(o) => o.name]))
        .groupBy(o => o.name[0].toUpperCase())
        .map((stores, letter) => ({ letter, stores }))
        .value();
      console.log(this.stores);
    }
  }
  handleError(err: any): void {
    console.log(err);
  }
}
