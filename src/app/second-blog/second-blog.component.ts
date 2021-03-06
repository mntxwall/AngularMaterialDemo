import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {of} from "rxjs";
import {delay} from "rxjs/operators";
import {ActivatedRoute} from '@angular/router';
import {MatSort, MatSortable} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-second-blog',
  templateUrl: './second-blog.component.html',
  styleUrls: ['./second-blog.component.css']
})
export class SecondBlogComponent implements OnInit, AfterViewInit  {

  constructor(private router: ActivatedRoute) { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
 // dataSource: any;
  dataSource = new MatTableDataSource<PeriodicElement>();
 // dataSource = new MatTableDataSource(ELEMENT_DATA);

  isLoading = false;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    console.log(`This is Second ${this.router.snapshot.url}`);

    of(ELEMENT_DATA).pipe(delay(1000))
      .subscribe(data => {
        this.isLoading = false;
        //this.dataSource = data;
        //this.dataSource = new MatTableDataSource(data);
        this.dataSource.data = data;
        this.dataSource.sort = this.sort;
      }, error => this.isLoading = false);

    //
  }

  ngAfterViewInit(): void {

  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
