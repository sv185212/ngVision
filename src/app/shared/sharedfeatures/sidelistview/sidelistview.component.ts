import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sidelistview',
  templateUrl: './sidelistview.component.html',
  styleUrls: ['./sidelistview.component.scss']
})
export class SidelistviewComponent implements OnInit {

  @Input() listArray:any  = [];
  @Output() onSelectedItem: EventEmitter<any> = new EventEmitter();
  direction = "";

  constructor() {
    this.appendItems();
  }

  selectedItem(item: any) {
    this.onSelectedItem.emit(item);
  }

  ngOnInit(): void {
  }

  onScrollDown(ev: any) {
    console.log("scrolled down!!", ev);
    //this.appendItems();
    this.direction = "scroll down";
  }

  onScrollUp(ev: any) {
    console.log("scrolled up!", ev);

    this.direction = "scroll up";
  }

  appendItems() {
    this.addItems("push");
  }

  prependItems() {
    this.addItems("unshift");
  }

  addItems(_method: string) {
    for (let i = 0; i < this.listArray.length; ++i) {
      if( _method === 'push'){
        this.listArray.push([i].join(""));
      }else if( _method === 'unshift'){
        this.listArray.unshift([i].join(""));
      }
    }
  }

}
