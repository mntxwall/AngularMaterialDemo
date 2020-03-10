import {Component, OnInit, ViewChild} from '@angular/core';
import {Master, Post} from '../post';
import {MatTable} from "@angular/material/table";

interface TableTypes {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-first-blog',
  templateUrl: './first-blog.component.html',
  styleUrls: ['./first-blog.component.css']
})
export class FirstBlogComponent implements OnInit {

  constructor() { }

  @ViewChild(MatTable) table: MatTable<any>;

  ELEMENT_DATA: Post[] = [
    {id: '4', link: '/v1/posts/1', title: 'title 1', body: 'blog post 1'},
    {id: '3', link: '/v1/posts/2', title: 'title 2', body: 'blog post 2'},
    {id: '1', link: '/v1/posts/3', title: 'title 3', body: 'blog post 3'},
    {id: '2', link: '/v1/posts/4', title: 'title 4', body: 'blog post 4'},
    {id: '5', link: '/v1/posts/5', title: 'title 5', body: 'blog post 5'}
  ];

  ELEMENT_DATA_1: Master[] = [
    {
      id: 4, a_iden_string: 'a_iden_string_1', b_iden_string: 'b_iden_string_1',
      dca: 100, cca: 20, name: 'name 1', cc: 'cc1', ctr:'ctr1', my:'my1', dt:'dt1', reg_place:'reg_place1', colo:'colo1'},
    {
      id: 5, a_iden_string: 'a_iden_string_2', b_iden_string: 'b_iden_string_2',
      dca: 100, cca: 20, name: 'name 2', cc: 'cc2', ctr:'ctr2', my:'my2', dt:'dt2', reg_place:'reg_place2', colo:'colo2'}
  ];

  /*
  *   reg_place: string;
  dca: number;
  cca: number;
  cl: number;
  name: string;
  cc: string;
  my: string;
  ctr: string;
  dt: string;
  * */
  displayedColumns: string[] = ['id', 'a_iden_string', 'b_iden_string', 'dca', 'cca', 'name', 'cc', 'ctr', 'my', 'dt', 'reg_place', 'colo', 'operation'];

  selectedRowId: string;
  dataSource = this.ELEMENT_DATA_1;

  tableTypes = ['suspect', 'undecided', 'innocence'];

  targetTables: TableTypes[] = [
    {value: 'suspect', viewValue: '有嫌疑'},
    {value: 'undecided', viewValue: '无法确定'},
    {value: 'innocence', viewValue: '没有问题'}
  ];
  private rowNumber: number;


  ngOnInit(): void {
    console.log(this.ELEMENT_DATA)
  }

  changeFoods(event): void {

    this.rowNumber = +event.value.split("_")[1];

    if (this.rowNumber > -1) {
      this.dataSource.splice(this.rowNumber, 1);
    }

    this.table.renderRows();

/*
    console.log(row);
    const index = this.dataSource.indexOf(row, 0);

    if (index > -1) {
      this.dataSource.splice(index, 1);
    }
    this.table.renderRows();*/


    //this.ELEMENT_DATA.pop();

    //this.table.renderRows();
   // console.log(`HelloWorld ${event.value}`)
    //this.ELEMENT_DATA.e

    //this.ELEMENT_DATA.indexOf()
    //this.operateValue = this.ELEMENT_DATA.filter(a => a.id === imp[1]);
    //this.clickIndex = this.ELEMENT_DATA.indexOf(this.operateValue[0]);
    //this.ELEMENT_DATA = this.ELEMENT_DATA.slice(0, this.rowNumber).concat(this.ELEMENT_DATA.slice(this.rowNumber+1, this.ELEMENT_DATA.length));
    //console.log(this.ELEMENT_DATA);
    //this.dataSource.splice(this.rowNumber, 1);
    //this.table.renderRows();

  }

}
