const masVotadasModel=require('../public/javascripts/masVotadas')


const controller={
    show: function(req, res, next) {
        res.render('index', { 
            title: 'Proyecto Movies',
        });
    }
}

module.exports = controller;