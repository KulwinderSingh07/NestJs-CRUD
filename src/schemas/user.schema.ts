import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({})
  Name: string;

  @Prop({required:true})
  Email: string;

  @Prop({required:true})
  Password: string;
}

export const UsersSchema = SchemaFactory.createForClass(User);