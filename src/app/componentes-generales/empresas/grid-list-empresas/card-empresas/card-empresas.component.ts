import { Component, OnInit,Input  } from '@angular/core';
import { Empresa } from '../../../modelos/empresa';

@Component({
  selector: 'app-card-empresas',
  templateUrl: './card-empresas.component.html',
  styleUrls: ['./card-empresas.component.css']
})
export class CardEmpresasComponent implements OnInit {

  @Input() empresa: Empresa;
  constructor() { }

  ngOnInit(): void {
  }

}
