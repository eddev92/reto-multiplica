import { Component } from '@angular/core';

@Component({
  selector: 'functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent {
    items: number [] = new Array();
    ngOnInit() {
        this.generateElements();
    }
    validateParameters(x: any, y: any) {
        if (x && y) {
            console.log('exito')
        } else {
            alert('Ambos valores son requeridos!')
        }
    }

    getAcumCubes() {
        const init: number = 1;
        const finish: number = 1000;
        let acum: number;
        let result: number;
        let values: number[] = new Array();

        for(let i = init; i <= finish; i++){
            if (i % 2 > 0) {
                values.push(i);
            }
          }
        result = values.reduce((num1: any, num2: any) => num1 + num2 );
          console.log(values)
          console.log(result)
    }
    generateElements() {
        for(let i = 1; i <= 6666; i++) {
            this.items.push(i);
        }
        console.log(this.items)
    }
    changeHour() {
       


    }
}
