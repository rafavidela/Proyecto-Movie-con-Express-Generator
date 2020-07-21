const sucursalesModel=require('../public/javascripts/sucursales')


const controller={
    show: function(req, res, next) {
        res.render('index', { 
            title: 'Nuestros Cines',
        });
    }
}

module.exports = controller;