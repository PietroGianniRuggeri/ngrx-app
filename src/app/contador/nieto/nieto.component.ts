import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  standalone: false,
  templateUrl: './nieto.component.html',
  styleUrl: './nieto.component.scss'
})
export class NietoComponent {
  @Input() contador: number = 0;
  @Output() resetContador = new EventEmitter<number>();

  reset() {
    this.contador = 0;
    this.resetContador.emit(0);
  }
}
