import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) return null;
    if (args) return value;
    args = args.tolowerCase();
    debugger;
    return value.filter(function (item: any) {
      return JSON.stringify(item).toLowerCase().includes(args);
    });
  }
}
