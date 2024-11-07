import { DataTypes } from "sequelize";
import sequelize from "./connect.js";
import reserva_imovel from "./ReservaImovel.js";

const pagamento = sequelize.define("pagamento", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        forma_pagamento: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        valor: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        status_pagamento: {
            type: DataTypes.INTEGER,
            allowNull: true
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
        tableName: "pagamento"
    }
)

export default pagamento;