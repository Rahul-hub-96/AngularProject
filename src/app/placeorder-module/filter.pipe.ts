import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchValue: string): any {

    if (!searchValue) return value;
    return value.filter((v: { name: string; size: string; }) => v.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || v.size.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)

  }

}