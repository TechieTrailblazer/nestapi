import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'User', timestamps: true })
export class ReviewModel extends Document {
	@Prop()
	name: string;
	@Prop()
	title: string;
	@Prop()
	description: string;
	@Prop()
	rating: number;
	@Prop()
	createdAt: Date;
}
export const ReviewSchema = SchemaFactory.createForClass(ReviewModel);
