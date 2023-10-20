import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class ProductCharacteristic {
	name: string;
	value: string;
}
@Schema({ collection: 'User', timestamps: true })
export class ProductModel extends Document {
	@Prop()
	image: string;
	@Prop()
	title: string;
	@Prop()
	price: number;
	@Prop()
	oldPrice: number;
	@Prop()
	credit: number;
	@Prop()
	calculatedRating: number;
	@Prop()
	description: string;
	@Prop()
	advantages: string;
	@Prop()
	disAdvantages: string;
	@Prop({ type: () => [String] })
	categories: string[];
	tags: string;
	characteristics: ProductCharacteristic[];
}
export const ProductSchema = SchemaFactory.createForClass(ProductModel);
