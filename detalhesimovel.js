import { DataTypes } from "sequelize";
import sequelize from "./connect.js";

const detalhes_imoveis = sequelize.define("detalhes_imoveis", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fotos: {
            type: DataTypes.STRING,
            allowNull: true
        },
        preco: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        disponibilidade: {
          type: DataTypes.BOOLEAN,
          allowNull: false
        },
        tipo_imovel: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        localizacao: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        criterio_busca: {
          type: DataTypes.STRING,
          allowNull: true
        },
    },
    {
        tableName: "detalhes_imoveis"
    }
)

export default detalhes_imoveis;