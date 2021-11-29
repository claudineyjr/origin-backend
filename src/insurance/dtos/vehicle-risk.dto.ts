import { IsNumber, IsOptional, IsPositive } from 'class-validator';

export class VehicleRiskDto {
  @IsNumber()
  @IsPositive()
  @IsOptional()
  year: number;
}
