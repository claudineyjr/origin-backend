import { Module } from '@nestjs/common';
import { AutoService } from './auto.service';

@Module({
  providers: [AutoService],
})
export class AutoModule {}
