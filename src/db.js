const { MongoClient } = require('mongodb');

async function connectToDatabase() {
    try {
        const client = await MongoClient.connect('mongodb+srv://jogotcc:1kcB3lU8U6PLgFD0@jogo-tcc.aaxtaiu.mongodb.net/');
        console.log("Conectado ao banco de dados");
        return client.db('jogodb');
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        throw error;
    }
}

module.exports = connectToDatabase;
