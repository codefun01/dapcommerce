import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  providers: [ItemsService]
})
export class ItemsComponent implements OnInit {

  items$ = this.itemService.getItems();
  breakpoint: Number;
  constructor(private itemService: ItemsService) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 2 : 3;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 2 : 3;
  }


}
