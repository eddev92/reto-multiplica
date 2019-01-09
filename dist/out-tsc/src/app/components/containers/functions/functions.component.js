import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var FunctionsComponent = /** @class */ (function () {
    function FunctionsComponent() {
        this.items = new Array();
        this.currencyHour = new Date();
        this.onlyHour = '';
    }
    FunctionsComponent.prototype.ngOnInit = function () {
        this.generateElements();
    };
    FunctionsComponent.prototype.validateParameters = function (x, y) {
        if (x && y) {
            console.log('exito');
        }
        else {
            alert('Ambos valores son requeridos!');
        }
    };
    FunctionsComponent.prototype.getAcumCubes = function () {
        var init = 1;
        var finish = 1000;
        var acum;
        var result;
        var values = new Array();
        var powThree = new Array();
        for (var i = init; i <= finish; i++) {
            if (i % 2 > 0) {
                values.push(i);
            }
        }
        powThree = values.map(function (val) { return Math.pow(val, 3); });
        result = powThree.reduce(function (num1, num2) { return num1 + num2; });
        alert(result);
    };
    FunctionsComponent.prototype.generateElements = function () {
        for (var i = 1; i <= 6666; i++) {
            this.items.push(i);
        }
    };
    FunctionsComponent.prototype.changeHour = function () {
        var min = 0;
        var max = 25;
        var maxMinutes = 61;
        var randomHours = Math.random() * (+max - +min) + +min;
        var randomMinutes = Math.random() * (+maxMinutes - +min) + +min;
        var randomSeconds = Math.random() * (+maxMinutes - +min) + +min;
        this.onlyHour =
            ((randomHours.toFixed(0).length === 1) ?
                "0" + randomHours.toFixed(0)
                :
                    randomHours.toFixed(0)) + ":" + (randomMinutes.toFixed(0).length === 1 ?
                "0" + randomMinutes.toFixed(0)
                :
                    randomMinutes.toFixed(0)) + ":" + (randomSeconds.toFixed(0).length === 1 ?
                "0" + randomSeconds.toFixed(0)
                :
                    randomSeconds.toFixed(0));
    };
    FunctionsComponent.prototype.getHour = function () {
        var date = new Date();
        this.onlyHour = date.getHours() + ":" + date.getMinutes() + ":" + ((date.getSeconds().toString()).length === 1 ? "0" + date.getSeconds() : date.getSeconds());
    };
    FunctionsComponent = tslib_1.__decorate([
        Component({
            selector: 'functions',
            templateUrl: './functions.component.html',
            styleUrls: ['./functions.component.css']
        })
    ], FunctionsComponent);
    return FunctionsComponent;
}());
export { FunctionsComponent };
//# sourceMappingURL=functions.component.js.map