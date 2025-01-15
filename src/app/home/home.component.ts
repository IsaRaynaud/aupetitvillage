import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: any[] = [];

  sortKey: string = 'title'; // Default sort key
  sortOrder: 'asc' | 'desc' = 'asc'; // Default sort order

  sortBy(key: string): void {
    if (this.sortKey === key) {
      // Toggle order if sorting by the same key
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      // Change the key and reset to ascending order
      this.sortKey = key;
      this.sortOrder = 'asc';
    }
  }

  constructor(private ProductsServiceService: ProductsServiceService) { }
  
  ngOnInit(): void {
    this.products = this.ProductsServiceService.products
  }

}
