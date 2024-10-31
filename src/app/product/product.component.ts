import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent implements OnInit {
  products: any[] = [];

  constructor(private ProductsServiceService: ProductsServiceService) { }
  
ngOnInit(): void {
  this.products = this.ProductsServiceService.products
  }
}