import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent implements OnInit {

  posts: Post[];

  categoria: string;
  check: boolean;

  constructor(private postServices: PostsService) {
    this.posts = [];
    this.categoria = '';
    this.check = false;
  }

  ngOnInit(): void {
    this.posts = this.postServices.getAll();
  }

  filter() {
    console.log(this.categoria);
    if (this.categoria === '' || this.postServices.getByCategoria(this.categoria).length === 0) {
      this.posts = this.postServices.getAll();
      this.check = true;
    } else {
      this.posts = this.postServices.getByCategoria(this.categoria);
      this.check = false;
    }
  }

}
