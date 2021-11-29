import { Injectable } from '@nestjs/common';
import { InsuranceRiskRequestDto } from '../dtos/insurance-risk-request.dto';

@Injectable()
export class HomeService {
  getInsuranceRisk(
    clientInformation: InsuranceRiskRequestDto,
    baseScore: number,
  ): number {
    const { house } = clientInformation;
    if (!house.ownership_status) return null;
    return baseScore + house.ownership_status === 'mortgaged' ? 1 : 0;
  }
}
