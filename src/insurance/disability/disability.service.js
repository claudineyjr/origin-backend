"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DisabilityService = void 0;
var common_1 = require("@nestjs/common");
var DisabilityService = /** @class */ (function () {
    function DisabilityService() {
    }
    DisabilityService.prototype.getInsuranceRisk = function (clientInformation, baseScore) {
        var income = clientInformation.income, age = clientInformation.age, house = clientInformation.house, dependents = clientInformation.dependents, marital_status = clientInformation.marital_status;
        var riskScore = baseScore;
        if (income <= 0 || age >= 60)
            return null;
        riskScore += house.ownership_status === 'mortgaged' ? 1 : 0;
        riskScore += dependents > 0 ? 1 : 0;
        riskScore += marital_status === 'married' ? -1 : 0;
        return riskScore;
    };
    DisabilityService = __decorate([
        (0, common_1.Injectable)()
    ], DisabilityService);
    return DisabilityService;
}());
exports.DisabilityService = DisabilityService;