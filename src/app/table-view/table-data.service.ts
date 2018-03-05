import { Injectable } from '@angular/core';
import { DataTableParams } from 'angular5-data-table';

@Injectable()
export class TableDataService {

  rowdata = [
    {firstName: 'F.Name01', lastName: 'L.Name01', title: 'title01'},
    {firstName: 'F.Name02', lastName: 'L.Name02', title: 'title02'},
    {firstName: 'F.Name03', lastName: 'L.Name03', title: 'title03'},
    {firstName: 'F.Name04', lastName: 'L.Name04', title: 'title04'},
    {firstName: 'F.Name05', lastName: 'L.Name05', title: 'title05'},
    {firstName: 'F.Name06', lastName: 'L.Name06', title: 'title06'},
    {firstName: 'F.Name07', lastName: 'L.Name07', title: 'title07'},
    {firstName: 'F.Name08', lastName: 'L.Name08', title: 'title08'},
    {firstName: 'F.Name09', lastName: 'L.Name09', title: 'title09'},
    {firstName: 'F.Name10', lastName: 'L.Name10', title: 'title10'},
    {firstName: 'F.Name11', lastName: 'L.Name11', title: 'title11'},
    {firstName: 'F.Name12', lastName: 'L.Name12', title: 'title12'},
    {firstName: 'F.Name13', lastName: 'L.Name13', title: 'title13'},
    {firstName: 'F.Name14', lastName: 'L.Name14', title: 'title14'},
    {firstName: 'F.Name15', lastName: 'L.Name15', title: 'title15'},
    {firstName: 'F.Name16', lastName: 'L.Name16', title: 'title16'},
    {firstName: 'F.Name17', lastName: 'L.Name17', title: 'title17'},
    {firstName: 'F.Name18', lastName: 'L.Name18', title: 'title18'},
    {firstName: 'F.Name19', lastName: 'L.Name19', title: 'title19'},
    {firstName: 'F.Name20', lastName: 'L.Name20', title: 'title20'},
    {firstName: 'F.Name21', lastName: 'L.Name21', title: 'title21'},
    {firstName: 'F.Name22', lastName: 'L.Name22', title: 'title22'},
    {firstName: 'F.Name23', lastName: 'L.Name23', title: 'title23'},
    {firstName: 'F.Name24', lastName: 'L.Name24', title: 'title24'},
    {firstName: 'F.Name25', lastName: 'L.Name25', title: 'title25'},
    {firstName: 'F.Name26', lastName: 'L.Name26', title: 'title26'},
    {firstName: 'F.Name27', lastName: 'L.Name27', title: 'title27'},
    {firstName: 'F.Name28', lastName: 'L.Name28', title: 'title28'},
    {firstName: 'F.Name29', lastName: 'L.Name29', title: 'title29'},
    {firstName: 'F.Name30', lastName: 'L.Name30', title: 'title30'},
    {firstName: 'F.Name31', lastName: 'L.Name31', title: 'title31'},
    {firstName: 'F.Name32', lastName: 'L.Name32', title: 'title32'},
    {firstName: 'F.Name33', lastName: 'L.Name33', title: 'title33'},
    {firstName: 'F.Name34', lastName: 'L.Name34', title: 'title34'},
    {firstName: 'F.Name35', lastName: 'L.Name35', title: 'title35'},
    {firstName: 'F.Name36', lastName: 'L.Name36', title: 'title36'},
    {firstName: 'F.Name37', lastName: 'L.Name37', title: 'title37'},
    {firstName: 'F.Name38', lastName: 'L.Name38', title: 'title38'},
    {firstName: 'F.Name39', lastName: 'L.Name39', title: 'title39'},
    {firstName: 'F.Name40', lastName: 'L.Name40', title: 'title40'},
    {firstName: 'F.Name41', lastName: 'L.Name41', title: 'title41'},
    {firstName: 'F.Name42', lastName: 'L.Name42', title: 'title42'},
    {firstName: 'F.Name43', lastName: 'L.Name43', title: 'title43'},
    {firstName: 'F.Name44', lastName: 'L.Name44', title: 'title44'},
    {firstName: 'F.Name45', lastName: 'L.Name45', title: 'title45'},
    {firstName: 'F.Name46', lastName: 'L.Name46', title: 'title46'},
    {firstName: 'F.Name47', lastName: 'L.Name47', title: 'title47'},
    {firstName: 'F.Name48', lastName: 'L.Name48', title: 'title48'},
    {firstName: 'F.Name49', lastName: 'L.Name49', title: 'title49'},
    {firstName: 'F.Name50', lastName: 'L.Name50', title: 'title50'},
  ];
  data = [];
  constructor() {
    this.data = this.rowdata;
  }

  get(params: DataTableParams): Promise<DataRows> {
    let result = this.data.slice();
    if (params.sortBy) {
      result.sort((a, b) => {
        if (typeof a[params.sortBy] === 'string') {
          return a[params.sortBy].localeCompare(b[params.sortBy]);
        } else {
          return a[params.sortBy] - b[params.sortBy];
        }
      });
      if (params.sortAsc === false) {
        result.reverse();
      }
    }
    if (params.offset !== undefined) {
      if (params.limit === undefined) {
        result = result.slice(params.offset, result.length);
      } else {
        result = result.slice(params.offset, params.offset + params.limit);
      }
    }
    return new Promise((resolve, reject) => {
      // setTimeout(() => resolve(result));
      resolve({
        list: result,
        count: this.data.length
        }
      );
    });
  }

  filter(dataFilter: DataFilter, params: DataTableParams): Promise<DataRows> {
    const firstNameFilter = dataFilter.firstName || '';
    const lastNameFilter = dataFilter.lastName || '';
    const titleFilter = dataFilter.title || '';
    if (firstNameFilter === '' && lastNameFilter === '' && titleFilter === '') {
      this.data = this.rowdata;
    } else {
      this.data = this.rowdata.filter((data: DataRow) => {
        let result = true;
        if (firstNameFilter) {
          result = result && data.firstName.includes(firstNameFilter);
        }
        if (lastNameFilter) {
          result = result && data.lastName.includes(lastNameFilter);
        }
        if (titleFilter) {
          result = result && data.title.includes(titleFilter);
        }
        return result;
      });
    }
    return this.get(params);
  }
}

interface DataRow {
  firstName: string;
  lastName: string;
  title: string;
}
interface DataRows {
  list: Array<DataRow>;
  count: number;
}

interface DataFilter {
  firstName: string;
  lastName: string;
  title: string;
}
