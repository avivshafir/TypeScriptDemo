var Engine = (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    Engine.prototype.start = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };

    Engine.prototype.stop = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    return Engine;
})();

var CustomEngine = (function () {
    function CustomEngine(horsePower) {
        this.horsePower = horsePower;
    }
    CustomEngine.prototype.start = function (callback) {
        window.setTimeout(function () {
            callback(true, 'Custom Engine');
        }, 1000);
    };

    CustomEngine.prototype.stop = function (callback) {
        window.setTimeout(function () {
            callback(true, 'Custom Engine');
        }, 1000);
    };
    return CustomEngine;
})();

var Accessory = (function () {
    function Accessory(accesssoryNumber, title) {
        this.accesssoryNumber = accesssoryNumber;
        this.title = title;
    }
    return Accessory;
})();

var Auto = (function () {
    function Auto(basePrice, engine, make, model, state, year) {
        this.engine = engine;
        this.basePrice = basePrice;
        this.state = state;
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Auto.prototype.calculateTotal = function () {
        var taxRate = .08;
        return this.basePrice + (taxRate * this.basePrice);
    };

    Auto.prototype.addAccessories = function () {
        var accessories = [];
        for (var _i = 0; _i < (arguments.length - 0); _i++) {
            accessories[_i] = arguments[_i + 0];
        }
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accesssoryNumber + ' ' + ac.title + '<br />';
        }
    };

    Auto.prototype.getAccessoryList = function () {
        return this.accessoryList;
    };

    Object.defineProperty(Auto.prototype, "basePrice", {
        get: function () {
            return this._basePrice;
        },
        set: function (value) {
            if (value <= 0)
                throw 'price must be >= 0';
            this._basePrice = value;
        },
        enumerable: true,
        configurable: true
    });


    Object.defineProperty(Auto.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw 'Please supply an engine';
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });

    return Auto;
})();

window.onload = function () {
    var auto = new Auto(40000, new Engine(300, 'V8'), 'Chevy', 'Silverado', 'Speed', 1977);
    alert(auto.make);
    alert(auto.model);
    alert(auto.engine.horsePower);

    var auto2 = new Auto(40000, new CustomEngine(600), 'Mercedes', 'Porche', 'Turbo', 1999);
    alert(auto2.make);
    alert(auto2.model);
    alert(auto2.engine.horsePower);
};
//-------------------------------------------------------------------------
//# sourceMappingURL=usinginterfaces.js.map
