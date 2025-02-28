export interface IBaseRepository<T, U> {
  create(data: T): Promise<string>;
  update(id: string, data: Partial<T>): Promise<U>;
  delete(id: string): Promise<boolean>;
  inativate(id: string): Promise<boolean>;
  reactivate(id: string): Promise<boolean>;
  find(filter: Partial<T>): Promise<U[]>;
  count(filter: Partial<T>): Promise<number>;
}
