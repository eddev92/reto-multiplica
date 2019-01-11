import { Component, Input } from '@angular/core';

@Component({
  selector: 'functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent {
    items: number [] = new Array();
    currencyHour: any = new Date();
    onlyHour: any = '';
    @Input() parameterA: any;
    @Input() parameterB: any;

    ngOnInit() {
        this.generateElements();
    }
    validateParameters() {
        if (this.parameterA && this.parameterB) {
            alert(`Los valores ingresados son: ${this.parameterA} y ${this.parameterB}`)
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
        let powThree: number[] = new Array();

        for(let i = init; i <= finish; i++){
            if (i % 2 > 0) {
                values.push(i);
            }
          }
          powThree = values.map(val => Math.pow(val, 3))
          result = powThree.reduce((num1: any, num2: any) => num1 + num2);
          alert(result)
    }
    generateElements() {
        for(let i = 1; i <= 6666; i++) {
            this.items.push(i);
        }
    }
    changeHour() {
        const min=0; 
        const max=25;
        const maxMinutes = 61;
        const randomHours: any = Math.random() * (+max - +min) + +min;
        const randomMinutes: any = Math.random() * (+maxMinutes - +min) + +min;
        const randomSeconds: any = Math.random() * (+maxMinutes - +min) + +min;
        this.onlyHour = 
            `${(randomHours.toFixed(0).length === 1) ?
                `0${randomHours.toFixed(0)}`
                :
                randomHours.toFixed(0)}:${(randomMinutes.toFixed(0).length === 1 ?
                    `0${randomMinutes.toFixed(0)}`
                    :
                    randomMinutes.toFixed(0))}:${(randomSeconds.toFixed(0).length === 1 ?
                        `0${randomSeconds.toFixed(0)}`
                        :
                        randomSeconds.toFixed(0))}`;
    }
    getHour() {
        const date: any = new Date();
        this.onlyHour = `${date.getHours()}:${date.getMinutes()}:${(date.getSeconds().toString()).length === 1 ? `0${date.getSeconds()}`: date.getSeconds()}`
    }
}
