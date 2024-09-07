const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { insertFormData } = require('./db');

const app = express();
const port = 3000;

app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/submit-form', (req, res) => {
    const formData = req.body;

    insertFormData(formData, (err, results) => {
        if (err) {
            console.error('Erro ao inserir dados:', err); 
            res.status(500).send('Erro ao salvar dados.');
            return;
        }
        res.status(200).send('Dados salvos com sucesso!');
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
