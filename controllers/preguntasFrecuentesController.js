const preguntasFrecuentesModel=require('../public/javascripts/preguntasFrecuentes')


const controller={
    show: function(req, res, next) {
        res.render('index', { 
            title: 'Preguntas Frecuentes',
        });
    }
}

module.exports = controller;