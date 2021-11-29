import { IsIn, IsString } from 'class-validator';

const ownershipStatus = ['mortgaged', 'owned'];

export class HomeRiskDto {
  @IsString()
  @IsIn(ownershipStatus)
  ownership_status: string;
}
