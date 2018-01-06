"use strict";
var Affecto;
(function (Affecto) {
    var Registration;
    (function (Registration) {
        function getModuleName(typeName) {
            var index = typeName.lastIndexOf(".");
            return typeName.slice(0, index);
        }
        function getClassName(typeName) {
            var index = typeName.lastIndexOf(".");
            return typeName.slice(index + 1);
        }
        function registerController(type, typeName) {
            var moduleName = getModuleName(typeName);
            angular.module(moduleName).controller(typeName, type);
        }
        Registration.registerController = registerController;
        function registerDirectiveFactory(factory, directiveTypeName) {
            var moduleName = getModuleName(directiveTypeName);
            var className = getClassName(directiveTypeName);
            var directiveName = "affecto" + className;
            angular.module(moduleName).directive(directiveName, factory);
        }
        Registration.registerDirectiveFactory = registerDirectiveFactory;
        function registerService(type, typeName) {
            var moduleName = getModuleName(typeName);
            var className = getClassName(typeName);
            var serviceName = className[0].toLowerCase() + className.slice(1);
            angular.module(moduleName).service(serviceName, type);
        }
        Registration.registerService = registerService;
    })(Registration = Affecto.Registration || (Affecto.Registration = {}));
})(Affecto || (Affecto = {}));
//# sourceMappingURL=Registration.js.map