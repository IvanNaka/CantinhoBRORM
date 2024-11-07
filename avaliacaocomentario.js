import { DataTypes } from "sequelize";
import sequelize from "./connect.js";
import reserva_imovel from "./ReservaImovel.js";

const avaliacao_comentario = sequelize.define("avaliacao_comentario", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        comentario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nota: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        reserva_imovel_id: {
          type: DataTypes.INTEGER,
          references: {
              model: reserva_imovel,
              key: 'id'
          }
      }
    },
    {
        tableName: "avaliacao_comentario"
    }
)

export default avaliacao_comentario;