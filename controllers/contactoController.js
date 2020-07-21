const contactoModel=require('../public/javascripts/contacto')

const controller={
    show: function(req, res, next) {
        res.render('contacto', {
            title: 'contacto',
            encabezado: contactoModel.armarEncabezado(),
            cuerpo: contactoModel.armarCuerpo(),
            pie: contactoModel.armarPie(),
        });
    }
}

module.exports = controller;