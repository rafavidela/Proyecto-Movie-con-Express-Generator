const indexModel=require('../public/javascripts/index')

const controller={
    show: function(req, res, next) {
        res.render('index', {
            title: 'Proyecto Movies',
            encabezado:indexModel.armarEncabezado(),
            cuerpo:indexModel.armarCuerpo(),
            pie:indexModel.armarPie()
        });
    }
}

module.exports = controller;

