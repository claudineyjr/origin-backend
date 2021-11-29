import { IsNumber, IsOptional, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VehicleRiskDto {
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  year: number;
}
