import { EEntityStatus } from './interfaces/domain/base-entity.interface';

export abstract class BaseEntity {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  status?: EEntityStatus;
}
