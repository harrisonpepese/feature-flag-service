export enum EntityStatus {
  inactive,
  active,
  deleted,
}

export interface IBaseEntity {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  status?: EntityStatus;
}
