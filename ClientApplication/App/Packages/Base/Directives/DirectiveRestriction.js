"use strict";
var Affecto;
(function (Affecto) {
    var Base;
    (function (Base) {
        // can be used as flags
        (function (DirectiveRestriction) {
            DirectiveRestriction[DirectiveRestriction["Attribute"] = 1] = "Attribute";
            DirectiveRestriction[DirectiveRestriction["Element"] = 2] = "Element";
            DirectiveRestriction[DirectiveRestriction["Class"] = 4] = "Class";
        })(Base.DirectiveRestriction || (Base.DirectiveRestriction = {}));
        var DirectiveRestriction = Base.DirectiveRestriction;
        ;
    })(Base = Affecto.Base || (Affecto.Base = {}));
})(Affecto || (Affecto = {}));
//# sourceMappingURL=DirectiveRestriction.js.map