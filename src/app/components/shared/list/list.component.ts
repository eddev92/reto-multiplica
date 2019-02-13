import {  ContentChild, QueryList, ViewChildren, ViewChild, AfterContentInit, Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

class ListComponent implements OnInit, AfterContentInit, AfterViewInit {

  public itemsReceive: any;

  @Input() items: any;
  @ViewChild(CardComponent) cardViewChild: CardComponent;
  @ViewChildren(CardComponent) cardViewChildren: QueryList<CardComponent>;
  @ContentChild(CardComponent) cardContentChild: CardComponent;

  constructor() { }


   ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(
      `ngAfterContentInit - cardContentChild is ${this.cardContentChild}`
    );
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit - cardViewChild is ${this.cardViewChild}`);

    let cards: CardComponent[] = this.items;
    console.log(cards);
  }
 }

export default ListComponent;