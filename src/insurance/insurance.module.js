"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InsuranceModule = void 0;
var common_1 = require("@nestjs/common");
var auto_module_1 = require("./auto/auto.module");
var home_module_1 = require("./home/home.module");
var disability_module_1 = require("./disability/disability.module");
var life_module_1 = require("./life/life.module");
var insurance_controller_1 = require("./insurance.controller");
var auto_service_1 = require("./auto/auto.service");
var disability_service_1 = require("./disability/disability.service");
var home_service_1 = require("./home/home.service");
var life_service_1 = require("./life/life.service");
var insurance_service_1 = require("./insurance.service");
var InsuranceModule = /** @class */ (function () {
    function InsuranceModule() {
    }
    InsuranceModule = __decorate([
        (0, common_1.Module)({
            imports: [auto_module_1.AutoModule, home_module_1.HomeModule, disability_module_1.DisabilityModule, life_module_1.LifeModule],
            controllers: [insurance_controller_1.InsuranceController],
            providers: [auto_service_1.AutoService, disability_service_1.DisabilityService, home_service_1.HomeService, life_service_1.LifeService, insurance_service_1.InsuranceService]
        })
    ], InsuranceModule);
    return InsuranceModule;
}());
exports.InsuranceModule = InsuranceModule;
