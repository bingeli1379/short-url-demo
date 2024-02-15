import 'dotenv/config'
import express from 'express'
import { Sequelize } from 'sequelize'

const app = express()

app.get('/', (req, res) => {
  res.json({ msg: 'Hello' })
})

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.listen(process.env.PORT)