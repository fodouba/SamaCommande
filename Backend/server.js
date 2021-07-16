const { request, response } = require('express');
const express = require('express');
const serveur = express();
const port = process.env.port || 4100;
server.use(express.static('public'));

serveur.get('/', (request, response)=>{
    response.send(`
          <h1>Sama Commande</h1>
          <h3>Toutes les nouveautés en lignes..</h3>

          <h4><a href="#" alt="lien">Cliquez pour voir plus...</a></h4>
    `);
});
serveur.get('/Accueil', (request, response)=>{
    response.send(express.static(__dirname + '/public' )););
});

serveur.listen(port, (request, response)=>{
    console.log(`Bonjour, votre serveur démarre sur le port ${port}`);
});