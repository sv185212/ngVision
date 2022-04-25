import { Component, OnInit } from '@angular/core';
import { terminaldata } from './terminals';

@Component({
  selector: 'app-mynetwork',
  templateUrl: './mynetwork.component.html',
  styleUrls: ['./mynetwork.component.scss']
})
export class MynetworkComponent implements OnInit {

  terminaldata:any = terminaldata
  constructor() { }

  ngOnInit(): void {
  }

  onSelectedItem(event: any) {
      console.log(event);
  }

}
