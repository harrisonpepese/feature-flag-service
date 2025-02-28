import { EntityStatus } from './interfaces/domain/base-entity.interface';

export abstract class BaseEntity {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  status?: EntityStatus;
}
