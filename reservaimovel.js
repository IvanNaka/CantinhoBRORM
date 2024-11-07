import { DataTypes } from "sequelize";
import sequelize from "./connect.js";

const reserva_imovel = sequelize.define("reserva_imovel", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        dados_reserva: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        datas_disponiveis: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        valor_total: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        detalhes_imoveis_id: {
          type: DataTypes.INTEGER,
          references: {
              model: detalhes_imoveis,
              key: 'id'
          }
      }
    },
    {
        tableName: "reserva_imovel"
    }
)

export default reserva_imovel;