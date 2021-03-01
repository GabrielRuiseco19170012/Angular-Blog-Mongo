import {Component, OnInit} from '@angular/core';
import {openClose, showHide} from '../../animations/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    openClose
  ]
})
export class HomeComponent implements OnInit {

  tableA: boolean;
  tableB: boolean;
  tableC: boolean;

  constructor() {
    this.tableA = true;
    this.tableB = false;
    this.tableC = false;
  }

  ngOnInit(): void {
  }

  switchTables(table: string): void {
    switch (table) {
      case 'A':
        this.tableA = true;
        this.tableB = false;
        this.tableC = false;
        break;
      case 'B':
        this.tableA = false;
        this.tableB = true;
        this.tableC = false;
        break;
      case 'C':
        this.tableA = false;
        this.tableB = false;
        this.tableC = true;
        break;
    }
  }
}
