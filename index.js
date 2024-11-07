import { Sequelize } from "sequelize";
import sequelize from "./connect.js";
import detalhes_imoveis from "./detalhesimovel.js";
import reserva_imovel from "./ReservaImovel.js";
import avaliacao_comentario from "./avaliacaocomentario.js";
import geolocalizacao from "./geolocalizacao.js";
import pagamento from "./pagamento.js";


detalhes_imoveis.hasMany(reserva_imovel);
detalhes_imoveis.hasMany(avaliacao_comentario);
geolocalizacao.belongsTo(detalhes_imoveis, { foreignKey: 'detalhes_imoveis_id' });
avaliacao_comentario.belongsTo(detalhes_imoveis, { foreignKey: 'detalhes_imoveis_id' });
pagamento.belongsTo(reserva_imovel, { foreignKey: 'pagamento_id' });
reserva_imovel.belongsTo(detalhes_imoveis, { foreignKey: 'detalhes_imoveis_id' });

sequelize.sync({force: true});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.detalhes_imoveis = detalhes_imoveis;
db.reserva_imovel = reserva_imovel;
db.avaliacao_comentario = avaliacao_comentario;
db.geolocalizacao = geolocalizacao;
db.pagamento = pagamento;

export default db;