import { Test, TestingModule } from '@nestjs/testing';
import { InsuranceRiskRequestDto } from './dtos/insurance-risk-request.dto';
import { InsuranceRiskResponseDto } from './dtos/insurance-risk-response.dto';
import { InsuranceController } from './insurance.controller';
import { InsuranceService } from './insurance.service';

describe('InsuranceController', () => {
  let controller: InsuranceController;
  let mockedInsuranceService: Partial<InsuranceService>;
  let bodyPayload = {
    age: 35,
    dependents: 2,
    house: { ownership_status: 'owned' },
    income: 0,
    marital_status: 'married',
    risk_questions: [0, 1, 0],
    vehicle: { year: 2018 },
  } as InsuranceRiskRequestDto;

  const expectedReturn = {
    auto: 'regular',
    home: 'regular',
    life: 'regular',
    disability: 'regular',
  };

  beforeEach(async () => {
    mockedInsuranceService = {
      getInsuranceRisk: (
        body: InsuranceRiskRequestDto,
      ): InsuranceRiskResponseDto => {
        return expectedReturn;
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsuranceController],
      providers: [
        { provide: InsuranceService, useValue: mockedInsuranceService },
      ],
    }).compile();

    controller = module.get<InsuranceController>(InsuranceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return risk profile correctly', () => {
    expect.assertions(1);
    const result = mockedInsuranceService.getInsuranceRisk(bodyPayload);
    expect(result).toBeDefined();
  });
});
