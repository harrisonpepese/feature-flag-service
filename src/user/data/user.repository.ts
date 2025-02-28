import { InjectModel } from '@nestjs/mongoose';
import { UserModel } from '../infra/mongodb/user.schema';
import { Model } from 'mongoose';
import { User } from '../domain/user.entity';
import { IUserRepository } from '../domain/interfaces/repository/user-repository.interface';
import { IUser, IUserProps } from '../domain/interfaces/domain/user.interface';
import { BaseRepository } from 'src/common/data/base.repository';

export class UserRepository
  extends BaseRepository<IUserProps, IUser>
  implements IUserRepository
{
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserModel>,
  ) {
    super(userModel);
  }

  async findByEmail(email: string): Promise<IUser | undefined> {
    const result = await this.userModel.findOne({
      email,
    });

    if (!result) {
      return undefined;
    }

    return result as unknown as IUser;
  }
}
