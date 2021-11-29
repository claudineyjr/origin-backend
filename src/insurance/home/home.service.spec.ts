import { Test, TestingModule } from '@nestjs/testing';
import { HomeService } from './home.service';

describe('HomeService', () => {
  let service: HomeService;
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
      providers: [HomeService],
    }).compile();

    service = module.get<HomeService>(HomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a null result because as the user dont have a vehicle', () => {
    clientInformation.house = {};
    const result = service.getInsuranceRisk(clientInformation, 0);
    expect(result).toBeNull();
  });

  it('should return a risk of 0 because of the mortgaged house', () => {
    clientInformation.house.ownership_status = 'mortgaged';
    const result = service.getInsuranceRisk(clientInformation, 0);
    expect(result).toBe(0);
  });
});
