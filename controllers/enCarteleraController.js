const enCarteleraModel=require('../public/javascripts/enCartelera')

const controller={
    show: function(req, res, next) {
        res.render('index', { 
            title: 'En Cartelera',
        });
    }
}

module.exports = controller;