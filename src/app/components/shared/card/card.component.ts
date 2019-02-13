import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Output() valueChange = new EventEmitter();
    @Output() valueChangeEdit = new EventEmitter();
    @Input("item") data;
    @Input() editItem: Function;
    valueChanged() {
        this.valueChange.emit({name: this.data.name, desc: this.data.desc});
    }
    valueChangedEdit() {
        this.valueChangeEdit.emit({name: this.data.name, desc: this.data.desc});
    }
}
