import { Component, OnInit, ViewChild } from '@angular/core';
import { TableDataService } from './table-data.service';
import { DataTable } from 'angular5-data-table';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  items = [];
  itemsCount = 0;
  firstNameFilter = '';
  lastNameFilter = '';
  currentParams = {};

  @ViewChild(DataTable) personTable: DataTable;

  constructor(public tableData: TableDataService) {
  }

  ngOnInit() {
  }

  reloadItems(params) {
    this.currentParams = params;
    this.tableData.get(params)
      .then(data => {
        this.items = data.list;
        this.itemsCount = data.count;
      });
  }

  filter() {
    this.tableData.filter({
      firstName: this.firstNameFilter,
      lastName: this.lastNameFilter,
      title: ''
    }, this.currentParams).then(data => {
      this.items = data.list;
      this.itemsCount = data.count;
    });
  }

  ask() {
    this.personTable.selectedRows.forEach( row => {
      console.log(row);
    });
  }
}
