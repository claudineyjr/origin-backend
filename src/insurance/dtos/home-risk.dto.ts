import { IsIn, IsString, IsOptional } from 'class-validator';

const ownershipStatus = ['mortgaged', 'owned'];

export class HomeRiskDto {
  @IsString()
  @IsIn(ownershipStatus)
  @IsOptional()
  ownership_status: string;
}
