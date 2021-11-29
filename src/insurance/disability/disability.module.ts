import { Module } from '@nestjs/common';
import { DisabilityService } from './disability.service';

@Module({
  providers: [DisabilityService]
})
export class DisabilityModule {}
