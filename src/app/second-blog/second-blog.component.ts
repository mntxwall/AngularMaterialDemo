import { Component, OnInit } from '@angular/core';
import {Post} from '../post';


const ELEMENT_DATA: Post[] = [
  {id: '10', link: '/v1/posts/10', title: 'title 10', body: 'blog post 10'},
  {id: '20', link: '/v1/posts/20', title: 'title 20', body: 'blog post 20'},
  {id: '30', link: '/v1/posts/30', title: 'title 30', body: 'blog post 30'},
  {id: '40', link: '/v1/posts/40', title: 'title 40', body: 'blog post 40'},
  {id: '50', link: '/v1/posts/50', title: 'title 50', body: 'blog post 50'}
];

@Component({
  selector: 'app-second-blog',
  templateUrl: './second-blog.component.html',
  styleUrls: ['./second-blog.component.css']
})
export class SecondBlogComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['id', 'link', 'title', 'body'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

}
