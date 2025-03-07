import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: false,
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.scss'
})
export class HijoComponent {

  @Input() contador: number = 0;
  @Output() cambioContador = new EventEmitter<number>();

  constructor() { }

  multiplicar() {
    this.contador *= 2;
    this.cambioContador.emit(this.contador);
  }

  dividir() {
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }

  resetContador(number: number) {
    this.contador = number;
    this.cambioContador.emit(number);
  }

}
