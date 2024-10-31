import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: any[] = [];

  constructor(private ProductsServiceService: ProductsServiceService) { }
  
  ngOnInit(): void {
    this.products = this.ProductsServiceService.products
  }
}
