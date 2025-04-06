export class CreateReservationDto {
  startDate: Date; // Start date of the reservation
  endDate: Date; // End date of the reservation
  placeId: string; // ID of the place being reserved
  invoiceId: string; // ID of the invoice associated with the reservation
}
