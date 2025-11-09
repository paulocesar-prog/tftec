const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Olá! Esta é uma aplicação Node.js sem banco, pronta para o Azure App Service.');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});