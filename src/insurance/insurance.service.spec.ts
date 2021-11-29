import { Test, TestingModule } from '@nestjs/testing';
import { AutoService } from './auto/auto.service';
import { DisabilityService } from './disability/disability.service';
import { InsuranceRiskRequestDto } from './dtos/insurance-risk-request.dto';
import { HomeService } from './home/home.service';
import { InsuranceService } from './insurance.service';
import { RiskSegment } from './interfaces/risk-segment.interface';
import { LifeService } from './life/life.service';

describe('InsuranceService', () => {
  let service: InsuranceService;
  let mockRiskServices: Partial<RiskSegment>;

  beforeEach(async () => {
    mockRiskServices = {
      getInsuranceRisk: (
        riskInfo: InsuranceRiskRequestDto,
        baseScore: number,
      ) => {
        return 1;
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InsuranceService,
        {
          provide: AutoService,
          useValue: mockRiskServices,
        },
        {
          provide: DisabilityService,
          useValue: mockRiskServices,
        },
        {
          provide: HomeService,
          useValue: mockRiskServices,
        },
        {
          provide: LifeService,
          useValue: mockRiskServices,
        },
      ],
    }).compile();

    service = module.get<InsuranceService>(InsuranceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
