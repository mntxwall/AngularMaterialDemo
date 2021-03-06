import {Component, OnInit, ViewChild} from '@angular/core';
import {Master, Post} from '../post';
import {MatTable} from '@angular/material/table';
import {BlogsService} from '../blogs.service';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';

interface TableTypes {
  value: string;
  viewValue: string;
}

import * as _moment from 'moment';
import 'moment/min/locales';
import {FormControl} from "@angular/forms";
// tslint:disable-next-line:no-duplicate-imports

const moment =  _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYYMMDD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-first-blog',
  templateUrl: './first-blog.component.html',
  styleUrls: ['./first-blog.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'zh-cn'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class FirstBlogComponent implements OnInit {

  constructor(private blogService: BlogsService, private _adapter: DateAdapter<any>) { }

  date = new FormControl(moment());



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
      id: 1,
      a_iden_string: 'a_iden_string_1', b_iden_string: 'b_iden_string_1',
      dca: 100, cca: 20, name: 'name 1', cc: '111', ctr: '1111111111111111111111111111',
      my: 'my1',
      dt: 'dt1',
      reg_place: 'reg_place1',
      colo: 'colo1'
    },
    {
      id: 2,
      a_iden_string: 'a_iden_string_1', b_iden_string: 'b_iden_string_1',
      dca: 100, cca: 20, name: 'name 1', cc: '111', ctr: '1111111111111111111111111111',
      my: 'my1',
      dt: 'dt1',
      reg_place: 'reg_place1',
      colo: 'colo1'
    },
    {
      id: 3,
      a_iden_string: 'a_iden_string_1', b_iden_string: 'b_iden_string_1',
      dca: 100, cca: 20, name: 'name 1', cc: '111', ctr: '1111111111111111111111111111',
      my: 'my1',
      dt: 'dt1',
      reg_place: 'reg_place1',
      colo: 'colo1'
    },
    {
      id: 4,
      a_iden_string: 'a_iden_string_1', b_iden_string: 'b_iden_string_1',
      dca: 100, cca: 20, name: 'name 1', cc: '111', ctr: '1111111111111111111111111111',
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
    {
      id: 7,
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
    {
      id: 8,
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
    {
      id: 9,
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
    {
      id: 10,
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
    'name', 'a_iden_string',
    'b_iden_string', 'reg_place', 'dca',
    'cca', 'cc', 'my', 'colo', 'dt', 'operation'];


  selectedRowId: string;
  // dataSource = this.ELEMENT_DATA_1;

  tableTypes = ['suspect', 'undecided', 'innocence'];

  targetTables: TableTypes[] = [
    {value: 'suspect', viewValue: '有嫌疑'},
    {value: 'undecided', viewValue: '无法确定'},
    {value: 'innocence', viewValue: '没有问题'}
  ];
  //  private rowNumber: number;
  dataSource: Master[];
  dataShow: Master[];

  isLoading = true;
  private rowNumber: number;
  private tableName: string;
  private postParam: Array<string>;

  length: number;
  pageIndex = 0;
  pageSize = 5;

  buttonIsEnable = false;



  ngOnInit(): void {

     //this.blogService.getMasterRows().subscribe(data => console.log(data));

    of(this.ELEMENT_DATA_1).pipe(delay(1000))
      .subscribe(data => {
        this.pageIndex = 0;
        this.length = data.length;
        this.isLoading = false;
        this.dataSource = data;
        this.dataShow = this.dataSource.slice(0, this.pageSize);
      }, error => this.isLoading = false);
    //this._adapter.setLocale('cn');

    console.log(moment().locale('zh-cn').format('LLLL'));

    //  console.log(this.ELEMENT_DATA);
  }

  pageEvent(event) {

    this.length = this.dataSource.length / this.pageSize;
    this.dataShow  = this.dataSource.slice(event.pageIndex * event.pageSize, (event.pageIndex + 1) * event.pageSize);
    this.table.renderRows();
    console.log(event);
  }

  setCookiesTest(event) :void {
    this.buttonIsEnable  = true;
    console.log("SetCookies");
    //this.blogService.getMasterRows();
    this.blogService.setCookiesTest().pipe(delay(3000)).subscribe(data => {

      this.buttonIsEnable = false;
      console.log(data)
    });
  }

  clearCookiesTest(event) {
    console.log("ClearCookies")
  }

  changeTables(event): void {
    this.postParam = event.value.split('_');

    this.rowNumber = +this.postParam[1];
    this.tableName = this.postParam[0];

    console.log(event);

   // this.blogService.postTables(this.tableName,
     // (this.dataSource[0] as Master).id).subscribe(blogs => console.log(blogs));

    if (this.rowNumber > -1) {
      this.dataShow.splice(this.rowNumber, 1);
    }

    //  console.log(this.dataSource[this.rowNumber-1].id);


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
