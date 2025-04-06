import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

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
}
