import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any[], key: string, order: 'asc' | 'desc' = 'asc'): any[] {
    return items.sort((a, b) =>
      order === 'asc' ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key])
    );

}
}
