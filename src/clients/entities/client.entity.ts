import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Client extends Document {
  @Prop({ required: true })
  nationalId: string; // cedula

  @Prop({ required: true })
  firstName: string; // nombre

  @Prop({ required: true })
  lastName: string; // apellido

  @Prop({ required: true })
  country: string; // pais

  @Prop()
  city?: string; // ciudad

  @Prop()
  state?: string; // departamento

  @Prop()
  address?: string; // direccion

  @Prop()
  phone?: string; // telefono

  @Prop({ unique: true, required: true })
  email: string; // email
}

export const ClientSchema = SchemaFactory.createForClass(Client);
