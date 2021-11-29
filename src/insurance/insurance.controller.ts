import { Body, Controller, Patch } from '@nestjs/common';
import { Serialize } from '../interceptors/serialize.interceptor';
import { InsuranceRiskRequestDto } from './dtos/insurance-risk-request.dto';
import { InsuranceRiskResponseDto } from './dtos/insurance-risk-response.dto';
import { InsuranceService } from './insurance.service';
import { ApiTags, ApiOkResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@ApiTags('insurance')
@Controller('insurance')
@Serialize(InsuranceRiskResponseDto)
export class InsuranceController {
  constructor(private insuranceService: InsuranceService) {}

  @ApiOkResponse({
    description: 'Score processed correctly',
    type: InsuranceRiskResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'bad request on some field',
  })
  @Patch('/risk')
  async getInsuranceRisk(@Body() body: InsuranceRiskRequestDto) {
    return this.insuranceService.getInsuranceRisk(body);
  }
}
