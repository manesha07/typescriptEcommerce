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

  async getAll1(): Promise<any> {
    const data = await connection(this.table).select("*");

    return data;
  }
  async getAll(pageNumber: number, itemsPerPage: number): Promise<any> {
    console.log("k bhata data1");
    const data = await connection(this.table)
      .select("*")
      .limit(itemsPerPage)
      .offset((pageNumber - 1) * itemsPerPage);
    console.log("k bhata data", data);

    return data;
  }

  async getById(id: number): Promise<Array<object> | null> {
    const [data] = await connection(this.table).select('*').where('id', id);

    return data ? data : null;
  }

  async findByParams(params: any): Promise<any | null> {
    const [data] = await connection(this.table).select("*").where(params);

    return data ? data : null;
  }

  async save(data: any): Promise<any> {
    const result = await connection(this.table).insert(data).returning("*");

    return result;
  }

  async updateById(id: number, data: any): Promise<any> {
    const result = await connection(this.table)
      .update(data)
      .where({ id })
      .returning("*");

    return result;
  }

  async removeById(id: number): Promise<any> {
    console.log("llllllif", id);
    const result = await connection(this.table).delete().where({ id });
    console.log("llllll", result);
    return result;
  }

  async removeByParams(params: any): Promise<any> {
    const result = await connection(this.table).delete().where(params);
    console.log("result1", result);
    return result;
  }

  async query(sql: string, params: any): Promise<any> {
    const result = await connection.raw(sql, params);

    return result.rows;
  }
}

export default DBModel;
