"use strict";
var Affecto;
(function (Affecto) {
    var Base;
    (function (Base) {
        var Directive = (function () {
            function Directive(restrictions, templateUrl, scope, require) {
                this.templateUrl = templateUrl;
                this.scope = scope;
                this.require = require;
                this.link = this.linkDirective.bind(this);
                this.setRestrictions(restrictions);
            }
            Directive.prototype.linkDirective = function ($scope, element, attributes, controller) {
                throw new Base.NotImplementedException("Directive link function must be implemented.");
            };
            Directive.prototype.setRestrictions = function (restrictions) {
                this.restrict = "";
                if (this.isRestrictedFor(restrictions, Base.DirectiveRestriction.Attribute)) {
                    this.restrict = this.restrict + "A";
                }
                if (this.isRestrictedFor(restrictions, Base.DirectiveRestriction.Element)) {
                    this.restrict = this.restrict + "E";
                }
                if (this.isRestrictedFor(restrictions, Base.DirectiveRestriction.Class)) {
                    this.restrict = this.restrict + "C";
                }
            };
            Directive.prototype.isRestrictedFor = function (restrictions, searchedRestriction) {
                return (restrictions & searchedRestriction) === searchedRestriction;
            };
            return Directive;
        }());
        Base.Directive = Directive;
    })(Base = Affecto.Base || (Affecto.Base = {}));
})(Affecto || (Affecto = {}));
//# sourceMappingURL=Directive.js.map