import { Injectable } from '@nestjs/common';
import { ReviewModel } from './review.model';
import { CreateReviewDto } from './dto/create-review.dto';
import { Model, Document, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ReviewService {
	constructor(@InjectModel('Review') private readonly reviewModel: Model<ReviewModel>) {}

	async create(dto: CreateReviewDto): Promise<Document<ReviewModel>> {
		return this.reviewModel.create(dto);
	}

	async delete(id: string): Promise<Document<ReviewModel> | null> {
		return this.reviewModel.findByIdAndDelete(id).exec();
	}

	async findByProductId(productId: string): Promise<Document<ReviewModel>[]> {
		return this.reviewModel.find({ productId: new Types.ObjectId(productId) }).exec();
	}
}
