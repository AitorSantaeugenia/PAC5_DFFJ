import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() public opcionMenu = new EventEmitter();

  public state:number = 1;

  goTo(op:number) {
    this.opcionMenu.emit(op);
    this.useActive(op);
  }

  useActive(active: number) {
    this.state = active;
  }
}
