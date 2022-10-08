import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  message1: any = '';
  version: any = '';

  constructor() {}

  ngOnInit(): void {
    axios.get('http://localhost:3000/api/api/messages/welcome').then((r) => {
      this.message1 = r.data;
    });
    axios.get('http://localhost:3000/api/api/messages/version').then((r) => {
      this.version = r.data;
    });
  }
}
