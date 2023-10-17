import { prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';

class ProductCharacteristic {
	name: string;
	value: string;
}

export class ProductModel extends TimeStamps implements Base {
	@prop()
	image: string;
	@prop()
	title: string;
	@prop()
	price: number;
	@prop()
	oldPrice: number;
	@prop()
	credit: number;
	@prop()
	calculatedRating: number;
	@prop()
	description: string;
	@prop()
	advantages: string;
	@prop()
	disAdvantages: string;
	@prop({ type: () => [String] })
	categories: string[];
	tags: string;
	characteristics: ProductCharacteristic[];
	_id: Types.ObjectId;
	id: string;
}
