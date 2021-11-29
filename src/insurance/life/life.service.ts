import { Injectable } from '@nestjs/common';
import { InsuranceRiskRequestDto } from '../dtos/insurance-risk-request.dto';

@Injectable()
export class LifeService {
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
