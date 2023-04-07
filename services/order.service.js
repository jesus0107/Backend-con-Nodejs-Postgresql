const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool')

class OrderService {

  constructor(){
    this.pool = pool;
    this.pool.on('error', (error) => console.log(error))
  }
  async create(data) {
    return data;
  }

  async find() {
    const sqlSentence = "SELECT * FROM public.tasks"
    const resp = await this.pool.query(sqlSentence)
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

module.exports = OrderService;
