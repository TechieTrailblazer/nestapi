import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'User', timestamps: true })
export class UserModel extends Document {
	@Prop({ unique: true })
	email: string;

	@Prop()
	passwordHash: string;
}
export const UserSchema = SchemaFactory.createForClass(UserModel);
