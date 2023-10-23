import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ collection: 'Review', timestamps: true })
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
	@Prop()
	productId: Types.ObjectId;
}
export const ReviewSchema = SchemaFactory.createForClass(ReviewModel);
