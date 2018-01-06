"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Affecto;
(function (Affecto) {
    var Base;
    (function (Base) {
        var NotImplementedException = (function (_super) {
            __extends(NotImplementedException, _super);
            function NotImplementedException(message) {
                _super.call(this, message);
            }
            NotImplementedException.prototype.getExceptionName = function () {
                return "Affecto.Base.Exceptions.NotImplementedException";
            };
            return NotImplementedException;
        }(Base.Exception));
        Base.NotImplementedException = NotImplementedException;
    })(Base = Affecto.Base || (Affecto.Base = {}));
})(Affecto || (Affecto = {}));
//# sourceMappingURL=NotImplementedException.js.map