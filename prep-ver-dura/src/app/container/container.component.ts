import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class UserListComponent implements OnInit {
  names: string[]; 
  constructor() { 
     this.names = ['Escavatori', 'Bulldozer.', 'Motolivellatrici', 'Abbattitrici forestali','Macchine di demolizione','Camion betoniere','Dumper','Macchine per miniere sotterranee','Esboscatrici','Gru forestali',]; 
  }
  ngOnInit() {
  }
}
