import { Test, TestingModule } from '@nestjs/testing';
import { InsuranceRiskRequestDto } from '../dtos/insurance-risk-request.dto';
import { AutoService } from './auto.service';

describe('AutoService', () => {
  let service: AutoService;
  let clientInformation;

  beforeEach(async () => {
    clientInformation = {
      age: 35,
      dependents: 2,
      house: { ownership_status: 'owned' },
      income: 0,
      marital_status: 'married',
      risk_questions: [0, 1, 0],
      vehicle: { year: 2018 },
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutoService],
    }).compile();

    service = module.get<AutoService>(AutoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a null result because as the user dont have a vehicle', () => {
    clientInformation.vehicle = {};
    const result = service.getInsuranceRisk(clientInformation, 0);
    expect(result).toBeNull();
  });
  it('should return a value for a old vehicle', () => {
    clientInformation.vehicle.year = 1900;
    const result = service.getInsuranceRisk(clientInformation, 0);
    expect(result).toBe(0);
  });
  it('should return a value for a vehicle produced in the last five years', () => {
    clientInformation.vehicle.year = new Date().getUTCFullYear() - 5;
    const result = service.getInsuranceRisk(clientInformation, 0);
    expect(result).toBe(1);
  });
});
