import { Injectable } from '@nestjs/common';
import { InsuranceRiskRequestDto } from '../dtos/insurance-risk-request.dto';
import { RiskSegment } from '../interfaces/risk-segment.interface';

@Injectable()
export class DisabilityService implements RiskSegment {
  getInsuranceRisk(
    clientInformation: InsuranceRiskRequestDto,
    baseScore: number,
  ): number {
    const { income, age, house, dependents, marital_status } =
      clientInformation;
    let riskScore = baseScore;
    if (income <= 0 || age >= 60) return null;
    riskScore += house.ownership_status === 'mortgaged' ? 1 : 0;
    riskScore += dependents > 0 ? 1 : 0;
    riskScore += marital_status === 'married' ? -1 : 0;
    return riskScore;
  }
}
