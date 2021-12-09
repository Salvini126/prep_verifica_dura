import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  names: string[];
  constructor() { 
    this.names = this.names = ['Escavatori', 'Bulldozer.', 'Motolivellatrici', 'Abbattitrici forestali','Macchine di demolizione','Camion betoniere','Dumper','Macchine per miniere sotterranee','Esboscatrici','Gru forestali',];  //Riempiamo il vettore
  }

  ngOnInit(): void {
  }

}
