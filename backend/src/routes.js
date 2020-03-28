const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const ongController = require('./controller/OngController');
const profileController = require('./controller/ProfileController');
const incidentController = require('./controller/IncidentController');
const sessionController = require('./controller/SessionController');

const routes = express.Router();


routes.post('/session', sessionController.create);

routes.get('/ongs', ongController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({//precisa do [] pois Segments.BODY é uma variável
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), ongController.create);//celebrate() precisa vir antes do .create, pois o express executa em ordem(celebrate() depois ongControler.create depois)

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), incidentController.index);

routes.post('/incidents', incidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), incidentController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown()
}), profileController.index);

module.exports = routes;//exportar as rotas
