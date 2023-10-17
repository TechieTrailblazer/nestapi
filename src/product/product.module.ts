import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModel } from './product.model';

@Module({
	controllers: [ProductController],
	imports: [
		MongooseModule.forFeature([
			{
				name: 'Product',
				schema: ProductModel,
			},
		]),
	],
})
export class ProductModule {}
