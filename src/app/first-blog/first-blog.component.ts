import {Component, OnInit, ViewChild} from '@angular/core';
import {Master, Post} from '../post';
import {MatTable} from "@angular/material/table";
import {BlogsService} from '../blogs.service';
import {of} from "rxjs";
import {delay} from "rxjs/operators";

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

  constructor(private blogService: BlogsService) { }

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
      id: 4,
      a_iden_string: 'a_iden_string_1',
      b_iden_string: 'b_iden_string_1',
      // tslint:disable-next-line:max-line-length
      dca: 100,
      cca: 20,
      name: 'name 1',
      cc: '1111111111111111111111111111',
      ctr: '1111111111111111111111111111',
      my: 'my1',
      dt: 'dt1',
      reg_place: 'reg_place1',
      colo: 'colo1'
    },
    {
      id: 5,
      a_iden_string: 'a_iden_string_2',
      b_iden_string: 'b_iden_string_2',
      dca: 100,
      cca: 20,
      name: 'name 2',
      cc: '2222222222222222222222222222',
      ctr: '2222222222222222222222222222',
      my: 'my2',
      dt: 'dt2',
      reg_place: 'reg_place2',
      colo: 'colo2'
    },
    {
      id: 6,
      a_iden_string: 'a_iden_string_1',
      b_iden_string: 'b_iden_string_1',
      dca: 100,
      cca: 20,
      name: 'name 1',
      cc: '1111111111111111111111111111',
      ctr: '1111111111111111111111111111',
      my: 'my1',
      dt: 'dt1',
      reg_place: 'reg_place1',
      colo: 'colo1'
    },

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
  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['id',
    'name', 'suspect',
    'contact', 'contact_num_reg_place', 'durationtime_count_all',
    'cnt_count_all', 'contact_location', 'user_name', 'certification_code', 'mealtype', 'capture_time_read', 'dt'];


  selectedRowId: string;
  //dataSource = this.ELEMENT_DATA_1;

  tableTypes = ['suspect', 'undecided', 'innocence'];

  targetTables: TableTypes[] = [
    {value: 'suspect', viewValue: '有嫌疑'},
    {value: 'undecided', viewValue: '无法确定'},
    {value: 'innocence', viewValue: '没有问题'}
  ];
  //private rowNumber: number;
  dataSource: any;

  isLoading = true;
  private rowNumber: number;
  private tableName: string;
  private postParam: Array<string>;


  ngOnInit(): void {

    this.blogService.getMasterRows().subscribe(data => console.log(data));

    of(this.ELEMENT_DATA_1).pipe(delay(1000))
      .subscribe(data => {
        this.isLoading = false;
        this.dataSource = data
      }, error => this.isLoading = false);

    //console.log(this.ELEMENT_DATA);
  }

  changeTables(event): void {
    this.postParam = event.value.split('_');

    this.rowNumber = +this.postParam[1];
    this.tableName = this.postParam[0];

    console.log();

    this.blogService.postTables(this.tableName,
      (<Master>this.dataSource[0]).id).subscribe(blogs => console.log(blogs));

    if (this.rowNumber > -1) {
      this.dataSource.splice(this.rowNumber, 1);
    }

    //console.log(this.dataSource[this.rowNumber-1].id);


    this.table.renderRows();





/*
    console.log(row);
    const index = this.dataSource.indexOf(row, 0);

    if (index > -1) {
      this.dataSource.splice(index, 1);
    }
    this.table.renderRows();*/


    // this.ELEMENT_DATA.pop();

    // this.table.renderRows();
    // console.log(`HelloWorld ${event.value}`)
    // this.ELEMENT_DATA.e

    // this.ELEMENT_DATA.indexOf()
    // this.operateValue = this.ELEMENT_DATA.filter(a => a.id === imp[1]);
    // this.clickIndex = this.ELEMENT_DATA.indexOf(this.operateValue[0])
    // tslint:disable-next-line:max-line-length
    // this.ELEMENT_DATA = this.ELEMENT_DATA.slice(0, this.rowNumber).concat(this.ELEMENT_DATA.slice(this.rowNumber+1, this.ELEMENT_DATA.length));
    // console.log(this.ELEMENT_DATA);
    // this.dataSource.splice(this.rowNumber, 1);
    // this.table.renderRows();

  }

}
