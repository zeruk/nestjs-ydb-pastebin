import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum PastebinTypes {
  js = 'JS',
  ts = 'TS',
}

export enum PastebinVisibilities {
  public = 'PUBLIC',
  notListed = 'NOT_LISTED',
}

export class CreatePastebinDto {
  @ApiProperty({ example: 'Text to paste' })
  @IsString()
  @MaxLength(2000)
  text: string;

  @ApiProperty({
    enumName: 'PastebinTypes',
    enum: Object.values(PastebinTypes),
  })
  @IsEnum(PastebinTypes, {
    message: `Valid types are: [${Object.values(PastebinTypes)}]`,
  })
  @IsOptional()
  type: string;

  @ApiProperty({
    enumName: 'PastebinVisibilities',
    enum: Object.values(PastebinVisibilities),
  })
  @IsEnum(PastebinVisibilities, {
    message: `Valid visibilities are: [${Object.values(PastebinVisibilities)}]`,
  })
  @IsOptional()
  visibility: string;
}
