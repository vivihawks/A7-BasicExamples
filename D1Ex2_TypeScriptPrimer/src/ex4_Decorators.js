var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function xyz(label, count) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            configurable: false,
            get: function () { return label; }
        });
    };
}
var Test = /** @class */ (function () {
    function Test() {
<<<<<<< HEAD
=======
        // invokes Override, which returns the decorator
>>>>>>> c2747ff (Angular 12 Upgrade)
        this.name = 'pat';
        this.age = 10;
    }
    __decorate([
<<<<<<< HEAD
        xyz('test', 142) // invokes Override, which returns the decorator
=======
        xyz('test', 142)
>>>>>>> c2747ff (Angular 12 Upgrade)
    ], Test.prototype, "name");
    __decorate([
        xyz('', 12)
    ], Test.prototype, "age");
    return Test;
}());
var t = new Test();
console.log("1. Property Decorator ");
console.log(t.name); // 'test'
console.log("--------------------");
function log(prefix) {
    return function (target) {
        var f = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log(prefix + target.name);
        };
        return f;
    };
}
var World = /** @class */ (function () {
    function World() {
    }
    World = __decorate([
        log('hello')
    ], World);
    return World;
}());
console.log("2. Class Decorator ");
var w = new World(); // outputs "helloWorld"
console.log("--------------------");
function logPosition(target, propertyKey, parameterIndex) {
    console.log(parameterIndex);
}
var Cow = /** @class */ (function () {
    function Cow() {
    }
    Cow.prototype.say = function (b, c) {
        console.log(b);
    };
    __decorate([
        __param(1, logPosition)
    ], Cow.prototype, "say");
    return Cow;
}());
console.log("3. Param Decorator ");
new Cow().say('Hello', false); // outputs 1 (newline) hello
console.log("--------------------");
