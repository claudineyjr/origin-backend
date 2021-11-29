"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InsuranceService = void 0;
var common_1 = require("@nestjs/common");
var InsuranceService = /** @class */ (function () {
    function InsuranceService(autoService, disabilityService, homeService, lifeService) {
        this.autoService = autoService;
        this.disabilityService = disabilityService;
        this.homeService = homeService;
        this.lifeService = lifeService;
    }
    InsuranceService.prototype.getInsuranceRisk = function (riskInfo) {
        var baseScore = this.calculateBaseScore(riskInfo);
        var autoScore = this.autoService.getInsuranceRisk(riskInfo, baseScore);
        var disabilityScore = this.disabilityService.getInsuranceRisk(riskInfo, baseScore);
        var homeScore = this.homeService.getInsuranceRisk(riskInfo, baseScore);
        var lifeScore = this.lifeService.getInsuranceRisk(riskInfo, baseScore);
        return {
            auto: this.getInsuranceLabel(autoScore),
            disability: this.getInsuranceLabel(disabilityScore),
            home: this.getInsuranceLabel(homeScore),
            life: this.getInsuranceLabel(lifeScore)
        };
    };
    InsuranceService.prototype.getInsuranceLabel = function (score) {
        if (score === null)
            return 'ineligible';
        if (score <= 0)
            return 'economic';
        if (score <= 2)
            return 'regular';
        return 'responsible';
    };
    InsuranceService.prototype.calculateBaseScore = function (riskInfo) {
        var baseScore = riskInfo.risk_questions.reduce(function (acc, curr) { return acc + curr; });
        baseScore += riskInfo.age < 30 ? -2 : 0;
        baseScore += riskInfo.age >= 30 && riskInfo.age <= 40 ? -1 : 0;
        baseScore += riskInfo.income > 200000 ? -1 : 0;
        return baseScore;
    };
    InsuranceService = __decorate([
        (0, common_1.Injectable)()
    ], InsuranceService);
    return InsuranceService;
}());
exports.InsuranceService = InsuranceService;
