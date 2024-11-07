import { Sequelize } from "sequelize";
const sequelize = new Sequelize({
  database: "cantinho_br",
  username: "root",
  password: "1234",
  host: "localhost",
  dialect: "mysql"
});
export default sequelize;