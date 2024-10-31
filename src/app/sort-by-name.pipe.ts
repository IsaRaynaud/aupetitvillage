import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByName'
})
export class SortByNamePipe implements PipeTransform {

  transform(products: any[], sortAlphabetically: boolean): any[] {
    if (!sortAlphabetically) return products;
    return products.sort((a:any, b:any) =>{
      if (a.title < b.title) {return -1;}
      else if (a.title > b.title) {return 1;}
      else return 0;
    })
  }
}
