import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-list-menu-del-dia',
  templateUrl: './grid-list-menu-del-dia.component.html',
  styleUrls: ['./grid-list-menu-del-dia.component.css']
})
export class GridListMenuDelDiaComponent implements OnInit {

  
/*
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];*/

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 5, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 5, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 5, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 5, color: '#DDBDF1'},
    {text: 'Five', cols: 1, rows: 5, color: 'lightblue'},
    {text: 'Six', cols: 1, rows: 5, color: 'lightgreen'},
    {text: 'Seven', cols: 1, rows: 5, color: 'lightpink'},
    {text: 'Eight', cols: 1, rows: 5, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}