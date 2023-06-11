import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public pages = [
    { title: 'Bienvenida', url: '/bienvenida', icon: 'home' },
    { title: 'Catálogo', url: '/catalogo', icon: 'list' },
  ];
}