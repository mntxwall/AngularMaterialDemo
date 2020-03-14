import {Component, OnInit} from '@angular/core';
import {BlogsService} from './blogs.service';
import {Post} from './post';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {environment} from '../environments/environment';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private blogService: BlogsService, private router: Router) {

    this.router.events.subscribe( e => {
      if (e instanceof NavigationEnd) {
        if (e.url === '/') {
          this.activeLink = '/first';
        } else {
        this.activeLink = e.url;
        }
        console.log(e.url);
      }
    }
  );
  }
  title = 'AngularMaterialDemo';

  activeLink = '';

  // private router: any;


  ngOnInit(): void {
    console.log(environment.apiUrl);
   // this.blogService.getPosts().subscribe(blogs => console.log(blogs));
    // this.router.snapshot.
     // this.router.
  }
}
