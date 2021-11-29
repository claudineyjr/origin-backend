import { Injectable } from '@nestjs/common';
import { AutoService } from './auto/auto.service';
import { DisabilityService } from './disability/disability.service';
import { InsuranceRiskRequestDto } from './dtos/insurance-risk-request.dto';
import { InsuranceRiskResponseDto } from './dtos/insurance-risk-response.dto';
import { HomeService } from './home/home.service';
import { LifeService } from './life/life.service';

@Injectable()
export class InsuranceService {
  constructor(
    private autoService: AutoService,
    private disabilityService: DisabilityService,
    private homeService: HomeService,
    private lifeService: LifeService,
  ) {}

  getInsuranceRisk(
    riskInfo: InsuranceRiskRequestDto,
  ): InsuranceRiskResponseDto {
    const baseScore = this.calculateBaseScore(riskInfo);
    const autoScore = this.autoService.getInsuranceRisk(riskInfo, baseScore);
    const disabilityScore = this.disabilityService.getInsuranceRisk(
      riskInfo,
      baseScore,
    );
    const homeScore = this.homeService.getInsuranceRisk(riskInfo, baseScore);
    const lifeScore = this.lifeService.getInsuranceRisk(riskInfo, baseScore);
    return {
      auto: this.getInsuranceLabel(autoScore),
      disability: this.getInsuranceLabel(disabilityScore),
      home: this.getInsuranceLabel(homeScore),
      life: this.getInsuranceLabel(lifeScore),
    };
  }

  getInsuranceLabel(score: number) {
    if (score === null) return 'ineligible';
    if (score <= 0) return 'economic';
    if (score <= 2) return 'regular';
    return 'responsible';
  }

  calculateBaseScore(riskInfo: InsuranceRiskRequestDto) {
    let baseScore = riskInfo.risk_questions.reduce((acc, curr) => acc + curr);
    baseScore += riskInfo.age < 30 ? -2 : 0;
    baseScore += riskInfo.age >= 30 && riskInfo.age <= 40 ? -1 : 0;
    baseScore += riskInfo.income > 200000 ? -1 : 0;
    return baseScore;
  }
}
