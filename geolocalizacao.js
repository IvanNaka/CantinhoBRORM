import { DataTypes } from "sequelize";
import sequelize from "./connect.js";
import detalhes_imoveis from "./detalhesimovel.js";

const geolocalizacao = sequelize.define("geolocalizacao", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        latitude: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        longitude: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        imoveis_proximos: {
            type: DataTypes.INTEGER,
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
        tableName: "geolocalizacao"
    }
)

export default geolocalizacao;