import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
   posts:any[];
  constructor(http:Http) { 
  	http.get('http://jsonplaceholder.typicode.com/posts')
  	.subscribe(
  		response=> {
  			console.log("http post working .");
  			this.posts=response.json();

  		});
  		
  	
  }

  ngOnInit() {
  }

}
