const express = require('express');
const ongController = require('./controller/OngController');
const profileController = require('./controller/ProfileController');
const incidentController = require('./controller/IncidentController');
const sessionController = require('./controller/SessionController');
const routes = express.Router();


routes.post('/session', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', profileController.index);

module.exports = routes;//exportar as rotas
