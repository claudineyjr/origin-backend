import { Injectable } from '@nestjs/common';
import { InsuranceRiskRequestDto } from '../dtos/insurance-risk-request.dto';
import { RiskSegment } from '../interfaces/risk-segment.interface';

@Injectable()
export class LifeService implements RiskSegment {
  getInsuranceRisk(
    clientInformation: InsuranceRiskRequestDto,
    baseScore: number,
  ): number {
    const { age, dependents, marital_status } = clientInformation;
    let riskScore = baseScore;
    if (age >= 60) return null;
    riskScore += dependents > 0 ? 1 : 0;
    riskScore += marital_status === 'married' ? 1 : 0;
    return riskScore;
  }
}
