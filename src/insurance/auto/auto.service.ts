import { Injectable } from '@nestjs/common';
import { InsuranceRiskRequestDto } from '../dtos/insurance-risk-request.dto';
import { RiskSegment } from '../interfaces/risk-segment.interface';

@Injectable()
export class AutoService implements RiskSegment {
  getInsuranceRisk(
    clientInformation: InsuranceRiskRequestDto,
    baseScore: number,
  ): number {
    const { vehicle } = clientInformation;
    const riskScore = baseScore;
    if (!vehicle.year) return null;
    const actualYear = new Date().getUTCFullYear();
    return riskScore + (actualYear - vehicle.year) <= 5 ? 1 : 0;
  }
}
