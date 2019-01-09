import * as tslib_1 from "tslib";
var Warrior = /** @class */ (function () {
    function Warrior() {
        this.speaker = true;
        this.study = false;
        this.scream = true;
    }
    return Warrior;
}());
var Nurse = /** @class */ (function () {
    function Nurse() {
        this.speaker = true;
        this.study = true;
        this.scream = false;
    }
    return Nurse;
}());
var Protoss = /** @class */ (function (_super) {
    tslib_1.__extends(Protoss, _super);
    function Protoss(name, age, country) {
        var _this = _super.call(this) || this;
        _this.name = '';
        _this.age = 0;
        _this.country = '';
        _this.run = true;
        _this.defend = true;
        Object.assign(_this, { name: name, age: age, country: country });
        return _this;
    }
    return Protoss;
}(Warrior));
export { Protoss };
var Terran = /** @class */ (function (_super) {
    tslib_1.__extends(Terran, _super);
    function Terran(name, age, country) {
        var _this = _super.call(this) || this;
        _this.name = '';
        _this.age = 0;
        _this.country = '';
        _this.atack = true;
        _this.bewitch = true;
        Object.assign(_this, { name: name, age: age, country: country });
        return _this;
    }
    return Terran;
}(Warrior));
export { Terran };
var Zerg = /** @class */ (function (_super) {
    tslib_1.__extends(Zerg, _super);
    function Zerg(name, age, country) {
        var _this = _super.call(this) || this;
        _this.name = '';
        _this.age = 0;
        _this.country = '';
        _this.mentalControl = true;
        _this.fly = true;
        Object.assign(_this, { name: name, age: age, country: country });
        return _this;
    }
    return Zerg;
}(Warrior));
export { Zerg };
var Custom2 = /** @class */ (function (_super) {
    tslib_1.__extends(Custom2, _super);
    function Custom2(name, age, country) {
        var _this = _super.call(this) || this;
        _this.name = '';
        _this.age = 0;
        _this.country = '';
        _this.bewitch = true;
        _this.mentalControl = true;
        _this.heal = true;
        Object.assign(_this, { name: name, age: age, country: country });
        return _this;
    }
    return Custom2;
}(Nurse));
export { Custom2 };
var Custom1 = /** @class */ (function (_super) {
    tslib_1.__extends(Custom1, _super);
    function Custom1(name, age, country) {
        var _this = _super.call(this) || this;
        _this.name = '';
        _this.age = 0;
        _this.country = '';
        _this.run = true;
        _this.defend = true;
        _this.atack = true;
        Object.assign(_this, { name: name, age: age, country: country });
        return _this;
    }
    return Custom1;
}(Nurse));
export { Custom1 };
//# sourceMappingURL=start-craft.js.map