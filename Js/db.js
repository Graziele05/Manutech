const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password', 
    database: 'manutech'
});


connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar com o banco de dados: ' + err.stack);
        return;
    }
    console.log('Conectado ao banco de dados MySQL.');
});


const insertFormData = (formData, callback) => {
    const sql = `INSERT INTO forms (
        nome, email, telefone, tipoEquipamento, marcaModelo, numeroSerie, 
        diagnostico, reparo, instalacaoSoftware, requisitosInstalacao, 
        atualizacaoSistema, versaoAtual, versaoDesejada, prioridade, 
        entrega, instrucoesAcesso, observacoes, horarioPreferido
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    connection.query(sql, [
        formData.nome,
        formData.email,
        formData.telefone,
        formData.tipoEquipamento,
        formData.marcaModelo,
        formData.numeroSerie,
        formData.diagnostico,
        formData.reparo,
        formData.instalacaoSoftware,
        formData.requisitosInstalacao,
        formData.atualizacaoSistema,
        formData.versaoAtual,
        formData.versaoDesejada,
        formData.prioridade,
        formData.entrega,
        formData.instrucoesAcesso,
        formData.observacoes,
        formData.horarioPreferido
    ], (err, results) => {
        if (err) {
            console.error('Erro ao inserir dados: ' + err.stack);
            return callback(err);
        }
        callback(null, results);
    });
};


module.exports = {
    insertFormData
};
