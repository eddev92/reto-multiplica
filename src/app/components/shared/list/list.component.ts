import { QueryList, ContentChild, ViewChildren, OnInit, ViewChild, AfterContentInit, AfterViewInit, Component, Input, EventEmitter, Output, ContentChildren } from '@angular/core';
import { SERVICES_ITEMS, CATEGORIES } from '../../../constants/services';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

class ListComponent {
    
 }

export default ListComponent;