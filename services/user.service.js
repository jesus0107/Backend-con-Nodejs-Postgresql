// const boom = require('@hapi/boom');
// const getConnection = require('../libs/postgres')
const pool = require('../libs/postgres.pool')
const { models } = require('../libs/sequelize');

class UserService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (error) => console.log(error))
  }

  async create(data) {
    return data;
  }

  async find() {
    // const sqlSentence = "SELECT * FROM public.tasks"
    // const resp = await this.pool.query(sqlSentence)
    const resp = await models.User.findAll();
    return resp;
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
