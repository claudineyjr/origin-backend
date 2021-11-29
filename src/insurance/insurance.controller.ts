import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Query,
  Delete,
  NotFoundException,
  Session,
  UseGuards,
} from '@nestjs/common';
import { Serialize } from '../interceptors/serialize.interceptor';
import { InsuranceRiskRequestDto } from './dtos/insurance-risk-request.dto';
import { InsuranceRiskResponseDto } from './dtos/insurance-risk-response.dto';
import { InsuranceService } from './insurance.service';

@Controller('insurance')
@Serialize(InsuranceRiskResponseDto)
export class InsuranceController {
  constructor(private insuranceService: InsuranceService) {}

  @Patch('/risk')
  async getInsuranceRisk(@Body() body: InsuranceRiskRequestDto) {
    return this.insuranceService.getInsuranceRisk(body);
  }
}
