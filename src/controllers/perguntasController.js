const perguntasService = require("../services/perguntasService");

module.exports = {
    // * Lê o arquivo XLSX dentro da pasta
    buscarPerguntas: async (req, res) => {
        const idFase = req.params.idFase

        let busca = await perguntasService.buscarPerguntas(idFase)
        
        res.json(busca)
    }
}