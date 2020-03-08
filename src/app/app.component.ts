import {Component, OnInit} from '@angular/core';
import {BlogsService} from './blogs.service';
import {Post} from './post';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private blogService: BlogsService) {
  }
  title = 'AngularMaterialDemo';

  links = ['First', 'Second'];
  activeLink = this.links[0];


  ngOnInit(): void {
   // this.blogService.getPosts().subscribe(blogs => console.log(blogs));
  }
}
