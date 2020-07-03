import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  empresas=['1','2','3','4'];
  constructor() { }
///no
  ngOnInit(): void {
  }

}
