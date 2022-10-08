import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import axios from 'axios';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  listProviders: Array<Provider> = [];
  constructor() {}

  ngOnInit(): void {
    axios.get(`http://localhost:3000/api/api/providers/all`).then((r) => {
      this.listProviders = r.data.providers;
    });
  }
}

export interface Provider {
  name: string;
  businessName: string;
  direction: string;
}
