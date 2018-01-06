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
        var MissingAttributeException = (function (_super) {
            __extends(MissingAttributeException, _super);
            function MissingAttributeException(message) {
                _super.call(this, message);
            }
            MissingAttributeException.prototype.getExceptionName = function () {
                return "Affecto.Base.Exceptions.MissingAttributeException";
            };
            return MissingAttributeException;
        }(Base.Exception));
        Base.MissingAttributeException = MissingAttributeException;
    })(Base = Affecto.Base || (Affecto.Base = {}));
})(Affecto || (Affecto = {}));
//# sourceMappingURL=MissingAttributeException.js.map