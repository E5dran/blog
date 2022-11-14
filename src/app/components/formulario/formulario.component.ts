import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private postService: PostsService, private router: Router) {
    this.formulario = new FormGroup({
      imgProfile: new FormControl('https://picsum.photos/300/300', []),
      titulo: new FormControl('', [
        Validators.required
      ]),
      texto: new FormControl('', [
        Validators.required
      ]),
      autor: new FormControl('', [
        Validators.required
      ]),
      imagen: new FormControl('https://picsum.photos/400/400', [
      ]),
      fecha: new FormControl(new Date, []),
      categoria: new FormControl('', [
        Validators.required
      ]),
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.postService.createPost(this.formulario.value);
    let all = this.postService.getAll()
    this.router.navigate(['/blog', 'posts']);
  }

}
