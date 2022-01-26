const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController'); //seleciona +  ctrl + d
const ProfileController = require('./controllers/ProfileController'); //seleciona +  ctrl + d
const SessionController = require('./controllers/SessionController'); //seleciona +  ctrl + d



const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);

//DELETAR CASO
routes.delete('/incidents/:id',IncidentController.delete);

module.exports = routes;