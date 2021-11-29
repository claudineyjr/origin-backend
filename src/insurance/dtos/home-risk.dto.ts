import { IsIn, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

const ownershipStatus = ['mortgaged', 'owned'];

export class HomeRiskDto {
  @ApiProperty({ enum: ['mortgaged', 'owned'] })
  @IsString()
  @IsIn(ownershipStatus)
  @IsOptional()
  ownership_status: string;
}
