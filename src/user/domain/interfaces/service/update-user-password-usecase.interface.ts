import { IBaseUseCase } from 'src/common/domain/interfaces/services/base-usecase.interface';
import { IUserProps } from '../domain/user.interface';

export interface IUpdateUserPasswordUseCase
  extends IBaseUseCase<IUserProps, void> {}
