import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransformData } from '../../../utils/transform';
var ObjectsComponent = /** @class */ (function () {
    function ObjectsComponent(http) {
        this.http = http;
        this.data = {};
    }
    ObjectsComponent.prototype.ngOnInit = function () {
        // this.getData();
    };
    ObjectsComponent.prototype.getData = function () {
        var _this = this;
        return this.http.get('./api/trama.json')
            .subscribe(function (res) {
            console.log(res);
            _this.data = res.paths;
        });
    };
    ObjectsComponent.prototype.transformData = function () {
        var _this = this;
        var auxTramaConFormato = new Array();
        var tramaConFormato = new Array();
        var obj = {
            consumes: '',
            hasBodyOrQueryReq: false,
            hasBodyReq: false,
            hasParameters: false,
            hasPathReq: false,
            hasQueryreq: false,
            httpMethod: '',
            parameters: {
                body: {
                    isRequired: false
                },
                path: {},
                query: {
                    modelName: '',
                    params: [
                        {
                            name: '',
                            isRequired: false,
                            comma: false,
                            isBoolean: false,
                            isNumber: false,
                            isString: false
                        }
                    ]
                }
            },
            path: ''
        };
        var arrayElements = Object.keys(this.data);
        if (arrayElements.length) {
            arrayElements.forEach(function (path) {
                auxTramaConFormato.push(_this.data[path]);
                console.log(arrayElements);
                console.log(auxTramaConFormato);
            });
            // map auxTramaConFormato
            if (auxTramaConFormato.length) {
                tramaConFormato = auxTramaConFormato.map(function (element) {
                    var newObj = TransformData.TransformObj(element);
                    return newObj;
                });
                console.log(tramaConFormato);
            }
            else {
                alert("Genere la trama ejemplo por favor.");
            }
        }
    };
    ObjectsComponent = tslib_1.__decorate([
        Component({
            selector: 'objects',
            templateUrl: './objects.component.html',
            styleUrls: ['./objects.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ObjectsComponent);
    return ObjectsComponent;
}());
export { ObjectsComponent };
//# sourceMappingURL=objects.component.js.map