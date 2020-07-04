import { Component, OnInit } from '@angular/core';

import { Empresa } from '../../modelos/empresa';

@Component({
  selector: 'app-grid-list-empresas',
  templateUrl: './grid-list-empresas.component.html',
  styleUrls: ['./grid-list-empresas.component.css']
})
export class GridListEmpresasComponent implements OnInit {

  cols:number=1;
  rows:number=5;
  empresas :Empresa[]=[
    {id:1,nombre:'Empresa 01',ruc:'111111',logo:'assets/imagenes/logo1.jpg'},
    {id:2,nombre:'Empresa 02',ruc:'222222',logo:'assets/imagenes/logo2.jpg'},
    {id:3,nombre:'Empresa 03',ruc:'333333',logo:'assets/imagenes/logo3.jpg'},
    {id:4,nombre:'Empresa 04',ruc:'444444',logo:'assets/imagenes/logo4.jpg'},
    {id:5,nombre:'Empresa 05',ruc:'555555',logo:'assets/imagenes/logo5.jpg'},
    {id:6,nombre:'Empresa 06',ruc:'666666',logo:'assets/imagenes/logo6.jpg'},
    {id:7,nombre:'Empresa 07',ruc:'777777',logo:'assets/imagenes/logo1.jpg'},
    {id:8,nombre:'Empresa 08',ruc:'888888',logo:'assets/imagenes/logo2.jpg'},
    {id:9,nombre:'Empresa 09',ruc:'999999',logo:'assets/imagenes/logo3.jpg'},
    {id:10,nombre:'Empresa 10',ruc:'101010',logo:'assets/imagenes/logo4.jpg'},
    {id:11,nombre:'Empresa 11',ruc:'123456',logo:'assets/imagenes/logo5.jpg'},
    {id:12,nombre:'Empresa 12',ruc:'121212',logo:'assets/imagenes/logo6.jpg'},
  ];

 
  constructor() { }

  ngOnInit(): void {
  }

}
