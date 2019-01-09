import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Terran, Protoss, Zerg, Custom1, Custom2 } from '../../../constants/start-craft';
import { USERS } from '../../../constants/users';
var StartCraftComponent = /** @class */ (function () {
    function StartCraftComponent() {
    }
    StartCraftComponent.prototype.createTerrans = function () {
        USERS.forEach(function (user) { return console.log(new Terran(user.name, user.age, user.country)); });
    };
    StartCraftComponent.prototype.createZerg = function () {
        USERS.forEach(function (user) { return console.log(new Zerg(user.name, user.age, user.country)); });
    };
    StartCraftComponent.prototype.createProtoss = function () {
        USERS.forEach(function (user) { return console.log(new Protoss(user.name, user.age, user.country)); });
    };
    StartCraftComponent.prototype.createCustom1 = function () {
        USERS.forEach(function (user) { return console.log(new Custom1(user.name, user.age, user.country)); });
    };
    StartCraftComponent.prototype.createCustom2 = function () {
        USERS.forEach(function (user) { return console.log(new Custom2(user.name, user.age, user.country)); });
    };
    StartCraftComponent = tslib_1.__decorate([
        Component({
            selector: 'start-craft',
            templateUrl: './start-craft.component.html',
            styleUrls: ['./start-craft.component.css']
        })
    ], StartCraftComponent);
    return StartCraftComponent;
}());
export { StartCraftComponent };
//# sourceMappingURL=start-craft.component.js.map