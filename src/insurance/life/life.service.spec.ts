import { Test, TestingModule } from '@nestjs/testing';
import { LifeService } from './life.service';

describe('LifeService', () => {
  let service: LifeService;
  let clientInformation;

  beforeEach(async () => {
    clientInformation = {
      age: 35,
      dependents: 0,
      house: { ownership_status: 'owned' },
      income: 100000,
      marital_status: 'single',
      risk_questions: [0, 1, 0],
      vehicle: { year: 2018 },
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [LifeService],
    }).compile();

    service = module.get<LifeService>(LifeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a null value based on age', () => {
    clientInformation.age = 60;
    expect(service.getInsuranceRisk(clientInformation, 0)).toBeNull();
  });

  it('should return a risk status of 1 based on marital_status', () => {
    clientInformation.marital_status = 'married';
    expect(service.getInsuranceRisk(clientInformation, 0)).toBe(1);
  });

  it('should return a risk status of 1 based on dependents number', () => {
    clientInformation.dependents = 1;
    expect(service.getInsuranceRisk(clientInformation, 0)).toBe(1);
  });
});
