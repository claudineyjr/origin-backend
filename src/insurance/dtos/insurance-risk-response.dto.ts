import { Expose } from 'class-transformer';

export class InsuranceRiskResponseDto {
  @Expose()
  auto: string;
  @Expose()
  disability: string;
  @Expose()
  home: string;
  @Expose()
  life: string;
}
