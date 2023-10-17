import { prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';

export class AuthModel extends TimeStamps implements Base {
	@prop({ unique: true })
	email: string;

	@prop()
	passwordHash: string;

	_id: Types.ObjectId;
	id: string;
}
