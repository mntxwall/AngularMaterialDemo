import {Component, OnInit, ViewChild} from '@angular/core';
import {Post} from '../post';
import {MatTable} from "@angular/material/table";

interface Food {
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

  displayedColumns: string[] = ['id', 'link', 'title', 'body', 'filter'];

  selectedRowId: string;
  dataSource = this.ELEMENT_DATA;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
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
