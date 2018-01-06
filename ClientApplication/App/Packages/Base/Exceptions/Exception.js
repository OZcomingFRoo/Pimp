"use strict";
var Affecto;
(function (Affecto) {
    var Base;
    (function (Base) {
        var Exception = (function () {
            function Exception(message) {
                this.message = message;
                this.stack = (new Error()).stack;
            }
            Object.defineProperty(Exception.prototype, "name", {
                get: function () {
                    return this.getExceptionName();
                },
                enumerable: true,
                configurable: true
            });
            Exception.prototype.toString = function () {
                return this.name + ": " + this.message;
            };
            Exception.prototype.getExceptionName = function () {
                throw new Error("Exception name not implemented.");
            };
            return Exception;
        }());
        Base.Exception = Exception;
    })(Base = Affecto.Base || (Affecto.Base = {}));
})(Affecto || (Affecto = {}));
//# sourceMappingURL=Exception.js.map