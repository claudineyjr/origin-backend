import { InsuranceRiskRequestDto } from '../dtos/insurance-risk-request.dto';

export interface RiskSegment {
  getInsuranceRisk(
    clientInformation: InsuranceRiskRequestDto,
    baseScore: number,
  ): number;
}
