import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  versionKey: false,
})
export class ReservationDocument extends AbstractDocument {
  @Prop({ type: String, required: true })
  timestamp: Date;
  
  @Prop({ type: String, required: true })
  startDate: Date;

  @Prop({ type: String, required: true })
  endDate: Date;
  
  @Prop({ type: String, required: true })
  userId: string;

  @Prop({ type: String, required: true })
  placeId: string;

  @Prop({ type: String, required: true })
  invoiceId: string;
}

export const ReservationSchema =
  SchemaFactory.createForClass(ReservationDocument);
