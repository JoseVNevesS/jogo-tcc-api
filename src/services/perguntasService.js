const { connectToDatabase } = require("../db");

module.exports = {
    // * Busca os dados do manifesto utilizando o id do usuário
    buscarPerguntas: async (idFase) => {
        return new Promise(async (aceito, rejeitado) => {
            try {
                const db = await connectToDatabase(); // Obtém a instância do banco de dados
                const collection = db.collection('perguntas');
                const filter = {
                    "fase": parseInt(idFase)
                };
                const result = await collection.find(filter).toArray();
                aceito(result);
            } catch (error) {
                console.error("Erro na rota /api/perguntas:", error);
                aceito(false);
            }
        })

    }
}