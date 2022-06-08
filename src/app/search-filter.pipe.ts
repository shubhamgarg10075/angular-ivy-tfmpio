import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(data: any, searchItem: any): any {
    if (searchItem == '' || searchItem == undefined) {
      return data;
    }

    return data.filter(
      (data) =>
        data.firstName.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1 ||
        data.email.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1 ||
        data.lastName.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1
    );
  }
}
