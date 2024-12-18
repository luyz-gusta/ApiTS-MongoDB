/* eslint-disable @typescript-eslint/no-explicit-any */
import { Model } from "mongoose";

export class BaseRepository<T, U extends Document> {
  private readonly model: Model<U>;

  constructor(entity: Model<U>) {
    this.model = entity;
  }

  async find(filter: Partial<T>): Promise<T[]> {
    const result: T[] = await this.model.find(filter as any);
    return result;
  }

  async createUser(data: T): Promise<any> {
    const result = await this.model.create(data)
    return result
  }
}
