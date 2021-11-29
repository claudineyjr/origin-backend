import { Module } from '@nestjs/common';
import { LifeService } from './life.service';

@Module({
  providers: [LifeService]
})
export class LifeModule {}
