const { MongoClient } = require('mongodb');

const uri = process.env.MONGOURI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Conectado ao Mongo");
        return client.db('jogodb');
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        throw error;
    }
}

module.exports = { connectToDatabase };
