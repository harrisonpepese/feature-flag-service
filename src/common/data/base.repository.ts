import { Model } from 'mongoose';
import { IBaseRepository } from '../domain/interfaces/repository/base-repository.interface';
import { EEntityStatus } from '../domain/interfaces/domain/base-entity.interface';

export abstract class BaseRepository<T, U> implements IBaseRepository<T, U> {
  constructor(protected readonly model: Model<T>) {}

  async create(data: T): Promise<string> {
    const result = await this.model.create(data);
    const id = result._id?.toString();
    if (!id) {
      throw new Error('Error creating entity');
    }
    return id;
  }

  async update(id: string, data: Partial<T>): Promise<U> {
    const result = await this.model.findByIdAndUpdate(id, { $set: data });
    return result as unknown as U;
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.model.updateOne(
      {
        _id: id,
        status: EEntityStatus.active,
      },
      {
        $set: {
          status: EEntityStatus.deleted,
        },
      },
    );
    return result.modifiedCount > 0;
  }

  async inativate(id: string): Promise<boolean> {
    const result = await this.model.updateOne(
      {
        _id: id,
        status: EEntityStatus.active,
      },
      {
        $set: {
          status: EEntityStatus.inactive,
        },
      },
    );
    return result.modifiedCount > 0;
  }

  async reactivate(id: string): Promise<boolean> {
    const result = await this.model.updateOne(
      {
        _id: id,
        status: EEntityStatus.inactive,
      },
      {
        $set: {
          status: EEntityStatus.active,
        },
      },
    );
    return result.modifiedCount > 0;
  }

  async find(filter: Partial<T>): Promise<U[]> {
    return await this.model.find({
      ...filter,
      status: EEntityStatus.active,
    });
  }

  async count(filter: Partial<T>): Promise<number> {
    return await this.model.countDocuments({
      ...filter,
      status: EEntityStatus.active,
    });
  }
}
