import {MatPaginatorIntl} from "@angular/material/paginator";
import {Injectable} from "@angular/core";

@Injectable()
export class ChinesePaginator extends MatPaginatorIntl {


  itemsPerPageLabel = '每页个数:';
  nextPageLabel     = 'next';
  previousPageLabel = 'previous';

  getRangeLabel = function (page, pageSize, length) {
    if (length === 0 || pageSize === 0) {
      return '0 od ' + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
    return startIndex + 1 + ' - ' + endIndex + ' / ' + length;
  };


  //paginatorIntl = new MatPaginatorIntl();

  //pa
  //paginatorIntl.itemsPerPageLabel = 'Items per pagina:';
  //paginatorIntl.nextPageLabel = 'Volgende pagina';
  //paginatorIntl.previousPageLabel = 'Vorige pagina';
  //paginatorIntl.getRangeLabel = dutchRangeLabel;

  //return paginatorIntl;

}
