import { IBaseRepository } from 'src/common/domain/interfaces/repository/base-repository.interface';
import { IUser, IUserProps } from '../domain/user.interface';

export interface IUserRepository extends IBaseRepository<IUserProps, IUser> {
  findByEmail(email: string): Promise<IUser | undefined>;
}
