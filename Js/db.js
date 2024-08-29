
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();


app.use(bodyParser.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'formmanutech',
});


db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado ao banco de dados MySQL');
});


app.post('/api/submit', (req, res) => {
    const {
        nome, email, telefone, tipoEquipamento, marcaModelo, numeroSerie,
        diagnostico, reparo, instalacaoSoftware, requisitosInstalacao, atualizacaoSistema,
        versaoAtual, versaoDesejada, prioridade, entrega, instrucoesAcesso, observacoes,
        horarioPreferido
    } = req.body;

    const sql = `
        INSERT INTO solicitacoes (
            nome, email, telefone, tipoEquipamento, marcaModelo, numeroSerie,
            diagnostico, reparo, instalacaoSoftware, requisitosInstalacao, atualizacaoSistema,
            versaoAtual, versaoDesejada, prioridade, entrega, instrucoesAcesso, observacoes,
            horarioPreferido
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [
        nome, email, telefone, tipoEquipamento, marcaModelo, numeroSerie,
        diagnostico, reparo, instalacaoSoftware, requisitosInstalacao, atualizacaoSistema,
        versaoAtual, versaoDesejada, prioridade, entrega, instrucoesAcesso, observacoes,
        horarioPreferido
    ], (err, result) => {
        if (err) {
            console.error('Erro ao inserir dados:', err);
            return res.status(500).send('Erro ao salvar os dados');
        }
        res.send('Dados salvos com sucesso');
    });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
