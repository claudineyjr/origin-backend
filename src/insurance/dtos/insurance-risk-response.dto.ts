import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class InsuranceRiskResponseDto {
  @ApiProperty()
  @Expose()
  auto: string;

  @ApiProperty()
  @Expose()
  disability: string;

  @ApiProperty()
  @Expose()
  home: string;

  @ApiProperty()
  @Expose()
  life: string;
}
