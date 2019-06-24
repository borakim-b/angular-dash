import { Component, OnInit } from '@angular/core';
import { TestList } from '../model/test-list';

declare var require: any;
const data: any = require('../mock/data/test-dash.json')

@Component({
  selector: 'app-test-dash',
  templateUrl: './test-dash.component.html',
  styleUrls: ['./test-dash.component.css']
})
export class TestDashComponent implements OnInit {

  public title: string;
  public rows: TestList[] = [];

  constructor() { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    console.log(data);
    this.title = data.title;
    this.rows = data.content;
    // this.testList = data.content;
  }

}
