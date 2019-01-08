import { Component } from '@angular/core';

@Component({
  selector: 'functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent {
    input1 = 1;
    input2 = 3;
    result = this.input1 + this.input2;
    ngOnInit() {
        this.validateParameters(1, 2);
    }
    validateParameters(x: any, y: any) {
        if (x && y) {
            console.log('exito')
        } else {
            alert('Ambos valores son requeridos!')
        }
    }
}
