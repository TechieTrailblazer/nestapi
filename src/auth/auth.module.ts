import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserSchema } from './user.model';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: UserModel.name, // Указываем имя модели, оно будет отображаться в базе данных
				schema: UserSchema, // Указываем схему для построения данных
			},
		]),
	],
})
export class AuthModule {}
