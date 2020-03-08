import { Component, OnInit } from '@angular/core';
import {Post} from '../post';

const ELEMENT_DATA: Post[] = [
  {id: '1', link: '/v1/posts/1', title: 'title 1', body: 'blog post 1'},
  {id: '2', link: '/v1/posts/2', title: 'title 2', body: 'blog post 2'},
  {id: '3', link: '/v1/posts/3', title: 'title 3', body: 'blog post 3'},
  {id: '4', link: '/v1/posts/4', title: 'title 4', body: 'blog post 4'},
  {id: '5', link: '/v1/posts/5', title: 'title 5', body: 'blog post 5'}
];

@Component({
  selector: 'app-first-blog',
  templateUrl: './first-blog.component.html',
  styleUrls: ['./first-blog.component.css']
})
export class FirstBlogComponent implements OnInit {

  constructor() { }


  displayedColumns: string[] = ['id', 'link', 'title', 'body'];
  dataSource = ELEMENT_DATA;


  ngOnInit(): void {
  }

}
