// const boom = require('@hapi/boom');
const getConnection = require('../libs/postgres')

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const conn = await getConnection();
    const resp = await conn.query("SELECT * FROM public.tasks")
    return resp.rows;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
