import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
    // @Output() valueChange = new EventEmitter();
    // @Output() valueChangeEdit = new EventEmitter();
    @Input("item") data;
    // @Input() desc: string;
    // @Input() name: string;
    // @Input() editItem: Function;

    valueChanged() {
        // this.valueChange.emit({name: this.name, desc: this.desc});
    }
    valueChangedEdit() {
        // this.valueChangeEdit.emit({name: this.name, desc: this.desc});
    }
}
