const express = require('express');
const bodyParser = require('body-parser');
// para enviar eventos para os demais microserviços
const axios = require('axios');

const app = express()
app.use(bodyParser.json());

app.post('/eventos', (req, res) =>{
    const evento = req.body;
    // envia o evento para o miroserviço de lembretes
    axios.post('http://localhost:4000/eventos', evento);
    // envia o evento para o miroserviço de observacoes
    axios.post('http://localhost:5000/eventos', evento);
    res.status(200);
})

app.listen(10000, () => {
    console.log('Barramento de eventos. Porta 10000');
});