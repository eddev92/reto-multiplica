import {  ContentChild, QueryList, ViewChildren, ViewChild, AfterContentInit, Component, Input, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

class ListComponent implements OnInit, AfterContentInit, AfterViewInit {

  public itemsReceive: any;

  @Input() items: any;
  @Output() handleItem: any = new EventEmitter<any>()
  @Output() handleRemoveItem: any = new EventEmitter<any>()
  @ViewChild(CardComponent) cardViewChild: CardComponent;
  @ViewChildren(CardComponent) cardViewChildren: QueryList<CardComponent>;
  @ContentChild(CardComponent) cardContentChild: CardComponent;

  constructor() { }


   ngOnInit() {

  }

  ngAfterContentInit() {

  }

  ngAfterViewInit() {
    let cards: CardComponent[] = this.items;
    console.log(cards);
  }

  editItem(item: any) {
    this.handleItem.next(item);
  }

  removeItem(item: any) {
    this.handleRemoveItem.next(item);
  }

 }

export default ListComponent;