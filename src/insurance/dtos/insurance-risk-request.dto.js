"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InsuranceRiskRequestDto = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var vehicle_risk_dto_1 = require("./vehicle-risk.dto");
var home_risk_dto_1 = require("./home-risk.dto");
var maritalStatus = ['single', 'married'];
var InsuranceRiskRequestDto = /** @class */ (function () {
    function InsuranceRiskRequestDto() {
    }
    __decorate([
        (0, class_validator_1.IsPositive)()
    ], InsuranceRiskRequestDto.prototype, "age");
    __decorate([
        (0, class_validator_1.IsPositive)()
    ], InsuranceRiskRequestDto.prototype, "dependents");
    __decorate([
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return home_risk_dto_1.HomeRiskDto; })
    ], InsuranceRiskRequestDto.prototype, "house");
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.Min)(0)
    ], InsuranceRiskRequestDto.prototype, "income");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsIn)(maritalStatus)
    ], InsuranceRiskRequestDto.prototype, "marital_status");
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ArrayMinSize)(3),
        (0, class_validator_1.ArrayMaxSize)(3),
        (0, class_validator_1.IsNumber)({}, { each: true }),
        (0, class_validator_1.Min)(0, { each: true }),
        (0, class_validator_1.Max)(1, { each: true })
    ], InsuranceRiskRequestDto.prototype, "risk_questions");
    __decorate([
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return vehicle_risk_dto_1.VehicleRiskDto; })
    ], InsuranceRiskRequestDto.prototype, "vehicle");
    return InsuranceRiskRequestDto;
}());
exports.InsuranceRiskRequestDto = InsuranceRiskRequestDto;
