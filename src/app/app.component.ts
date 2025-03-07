import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'redux-app';
  contador: number;

  constructor() {
    this.contador = 10;
  }

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }
}
