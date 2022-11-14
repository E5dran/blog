import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: Post[];

  constructor() {
    this.arrPosts = [{
      imgProfile: 'https://pbs.twimg.com/profile_images/1470840661939265537/n1YZthmW_400x400.jpg',
      titulo: 'Perretes',
      texto: 'Mocasines saltarines con las piel de dos mastines',
      autor: 'MontyBurn',
      imagen: 'https://www.pngall.com/wp-content/uploads/5/Pug-PNG-Images.png',
      fecha: new Date,
      categoria: 'Perros'
    },
    {
      imgProfile: 'https://i.pinimg.com/474x/71/9e/34/719e346e69afe758ba8e31a7024547a7.jpg',
      titulo: 'Ohana',
      texto: 'significa familia claramente',
      autor: 'Stich',
      imagen: 'https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/63caa-stitch-tierno-png.png?resize=700%2C700&ssl=1',
      fecha: new Date,
      categoria: 'familia'
    },
    {
      imgProfile: 'https://static-cdn.jtvnw.net/jtv_user_pictures/8eca7df2-3676-457f-9f01-da26e973de0d-profile_image-300x300.png',
      titulo: 'Mola mola',
      texto: 'Porque mola mola',
      autor: 'fishlover12',
      imagen: 'https://diveconcepts.com/img/media_library/mola-mola-png_091620200818055f61ca3d1c00c.png',
      fecha: new Date,
      categoria: 'Fish & chips'
    },
    {
      imgProfile: 'https://i.imgur.com/HQWJvqc.jpeg',
      titulo: 'Soy vegetariana',
      texto: 'odio la carne me encanta las plantas (comerlas)',
      autor: 'fabledLisa',
      imagen: 'https://images.vexels.com/media/users/3/143075/isolated/preview/67338ec18bf7513bd0687a6e82504d52-icono-de-color-de-brocoli.png',
      fecha: new Date,
      categoria: 'Vegetarian'
    }]
  }

  getAll() {
    const arrInvertido = [...this.arrPosts].reverse();
    return arrInvertido;
  }

  createPost(nPost: Post) {
    this.arrPosts.push(nPost);
  }

  getByCategoria(nCategoria: string) {
    const arrInvertido = [...this.arrPosts].reverse();
    let arrfilter = [];
    arrfilter = arrInvertido.filter(cat => cat.categoria.toLowerCase() === nCategoria.toLowerCase())
    return arrfilter;
  }

}
