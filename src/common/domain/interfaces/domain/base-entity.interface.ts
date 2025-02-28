export enum EEntityStatus {
  inactive,
  active,
  deleted,
}

export interface IBaseEntity {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  status?: EEntityStatus;
}
