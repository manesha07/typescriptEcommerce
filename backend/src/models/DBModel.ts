import { connection } from "../knexfile";

/**
 * Base model for that can be used for all tables.
 *
 * @class DBModel
 */

class DBModel {
  table: string;
  connection: any;

  constructor(table: string) {
    this.table = table;
    this.connection = connection;
  }

  async getAll1(): Promise<Array<object> | null> {
    const data = await connection(this.table).select("*");

    return data;
  }
  async getAll(pageNumber: number, itemsPerPage: number): Promise<Array<object> | null> {
    const data = await connection(this.table)
      .select("*")
      .limit(itemsPerPage)
      .offset((pageNumber - 1) * itemsPerPage);

    return data;
  }

  async getById(id: number) : Promise<Array<object> | null> {
    const [data] = await connection(this.table).select('*').where('id', id);

    return data ? data : null;
  }

  async findByParams(params: object): Promise<unknown> {
    console.log("data find by param params",params)
    const data = await connection(this.table).select("*").where(params);
    console.log("data find by param",data)
    return data ? data : null;
  }

  async save(data: object): Promise<Array<object> | null> {
    const result = await connection(this.table).insert(data).returning("*");
    return result;
  }

  async updateById(id: number, data: object): Promise<Array<object> | null> {
    const result = await connection(this.table)
      .update(data)
      .where({ id })
      .returning("*");

    return result;
  }

  async removeById(id: number): Promise<number | null> {
    const result = await connection(this.table).delete().where({ id });
    return result;
  }

  async removeByParams(params: object):Promise<number | null>{
    const result = await connection(this.table).delete().where(params);
    return result;
  }

}

export default DBModel;
