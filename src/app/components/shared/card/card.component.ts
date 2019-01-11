import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Output() valueChange = new EventEmitter();
    @Output() valueChangeEdit = new EventEmitter();
    @Input() name: string; 
    @Input() desc: string;
    // @Input() removeItem: Function;
    @Input() editItem: Function;

    valueChanged() {
        this.valueChange.emit({name: this.name, desc: this.desc});
    }
    valueChangedEdit() {
        this.valueChangeEdit.emit({name: this.name, desc: this.desc});
    }
}
