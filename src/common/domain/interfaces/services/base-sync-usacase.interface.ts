export interface IBaseSyncUseCase<T, U> {
  execute(data: T): U;
}
