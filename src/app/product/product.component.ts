import { Component, OnInit, Input } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent implements OnInit {
  @Input() product: any;
  products: any[] = [];
  selectedProduct: any;

  constructor(private ProductsServiceService: ProductsServiceService) { }
  
  ngOnInit(): void {
  this.products = this.ProductsServiceService.products
  }

  selectProduct(product:any) : void {
  this.selectedProduct = product;
  }
}