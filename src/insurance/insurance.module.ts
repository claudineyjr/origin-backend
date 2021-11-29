import { Module } from '@nestjs/common';
import { AutoModule } from './auto/auto.module';
import { HomeModule } from './home/home.module';
import { DisabilityModule } from './disability/disability.module';
import { LifeModule } from './life/life.module';
import { InsuranceController } from './insurance.controller';
import { AutoService } from './auto/auto.service';
import { DisabilityService } from './disability/disability.service';
import { HomeService } from './home/home.service';
import { LifeService } from './life/life.service';
import { InsuranceService } from './insurance.service';

@Module({
  imports: [AutoModule, HomeModule, DisabilityModule, LifeModule],
  controllers: [InsuranceController],
  providers: [AutoService, DisabilityService, HomeService, LifeService, InsuranceService],
})
export class InsuranceModule {}
