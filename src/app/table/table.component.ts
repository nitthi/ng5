import { Component } from '@angular/core';

import { TableService } from './table.service';
@Component({
  templateUrl: './table.component.html',
})
export class TableComponent {
  constructor(private tableService: TableService){}
}
