import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: any[], query: string): any[] {
    if (!products || !query) {
      return products;
    }
    return products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  }

}
