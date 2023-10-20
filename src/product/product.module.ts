import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModel, ProductSchema } from './product.model';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: 'Product', // Указываем имя модели, оно будет отображаться в базе данных
				schema: ProductSchema, // Указываем схему для построения данных
			},
		]),
	],
})
export class ProductModule {}
