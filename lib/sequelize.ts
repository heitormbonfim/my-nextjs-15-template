import { Sequelize } from "sequelize";
import pg from "pg";

const sequelize = new Sequelize("telegram-dashboard", "postgres", "password", {
  host: "localhost", // or use "postgres" if running inside docker-compose
  dialect: "postgres",
  dialectModule: pg, // explicitly use pg module
  port: 5001, // if you're connecting from outside docker; otherwise, use 5432 inside Docker
  // logging: (...msg) => console.log(msg), // Displays all log function call parameters
});

export default sequelize;
