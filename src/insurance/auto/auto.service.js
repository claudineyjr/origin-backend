"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AutoService = void 0;
var common_1 = require("@nestjs/common");
var AutoService = /** @class */ (function () {
    function AutoService() {
    }
    AutoService.prototype.getInsuranceRisk = function (clientInformation, baseScore) {
        var vehicle = clientInformation.vehicle;
        var riskScore = baseScore;
        if (!vehicle.year)
            return null;
        var actualYear = new Date().getUTCFullYear();
        return riskScore + (actualYear - vehicle.year) <= 5 ? 1 : 0;
    };
    AutoService = __decorate([
        (0, common_1.Injectable)()
    ], AutoService);
    return AutoService;
}());
exports.AutoService = AutoService;
