"use strict";
var Affecto;
(function (Affecto) {
    var Base;
    (function (Base) {
        var Controller = (function () {
            function Controller($scope) {
                var _this = this;
                $scope.$on("$destroy", function (event) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    _this.dispose();
                });
            }
            Controller.prototype.dispose = function () {
            };
            return Controller;
        }());
        Base.Controller = Controller;
    })(Base = Affecto.Base || (Affecto.Base = {}));
})(Affecto || (Affecto = {}));
//# sourceMappingURL=Controller.js.map