import { Type } from 'class-transformer';
import { IsDate, IsDefined, IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';
import { CardDto } from './card.dto';

export class CreateReservationDto {
  @IsDate()
  @Type(() => Date)
  startDate: Date; // Start date of the reservation

  @IsDate()
  @Type(() => Date)
  endDate: Date; // End date of the reservation

  @IsString()
  @IsNotEmpty()
  placeId: string; // ID of the place being reserved

  @IsString()
  @IsNotEmpty()
  invoiceId: string; // ID of the invoice associated with the reservation

  @IsDefined()
  @IsNotEmpty()
  @ValidateNested()
  card: CardDto;

  @IsNumber()
  amount: number;
}
