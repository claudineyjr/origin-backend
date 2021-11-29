import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsNumber,
  IsPositive,
  Min,
  Max,
  ValidateNested,
  IsString,
  IsIn,
} from 'class-validator';
import { VehicleRiskDto } from './vehicle-risk.dto';
import { HomeRiskDto } from './home-risk.dto';

const maritalStatus = ['single', 'married'];

export class InsuranceRiskRequestDto {
  @IsPositive()
  age: number;

  @IsPositive()
  dependents: number;

  @ValidateNested({ each: true })
  @Type(() => HomeRiskDto)
  house: HomeRiskDto;

  @IsNumber()
  @Min(0)
  income: number;

  @IsString()
  @IsIn(maritalStatus)
  marital_status: string;

  @IsArray()
  @ArrayMinSize(3)
  @ArrayMaxSize(3)
  @IsNumber({}, { each: true })
  @Min(0, { each: true })
  @Max(1, { each: true })
  risk_questions: number[];

  @ValidateNested({ each: true })
  @Type(() => VehicleRiskDto)
  vehicle: VehicleRiskDto;
}
