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
import { ApiProperty } from '@nestjs/swagger';

const maritalStatus = ['single', 'married'];

export class InsuranceRiskRequestDto {
  @ApiProperty()
  @IsPositive()
  age: number;

  @ApiProperty()
  @IsPositive()
  dependents: number;

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => HomeRiskDto)
  house: HomeRiskDto;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  income: number;

  @ApiProperty({ enum: ['married', 'single'] })
  @IsString()
  @IsIn(maritalStatus)
  marital_status: string;

  @ApiProperty({ type: [Number] })
  @IsArray()
  @ArrayMinSize(3)
  @ArrayMaxSize(3)
  @IsNumber({}, { each: true })
  @Min(0, { each: true })
  @Max(1, { each: true })
  risk_questions: number[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => VehicleRiskDto)
  vehicle: VehicleRiskDto;
}
