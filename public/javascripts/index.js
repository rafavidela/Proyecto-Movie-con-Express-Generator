const funcionesUtiles = require('./customFunctions.js');

var index={

    armarEncabezado: function () {
        let texto = `Contáctanos`;
    return (texto);
    },

    armarCuerpo: function () {
        let moviesJson = funcionesUtiles.leerDatos('./data/movies.json');
                listOfMovies = moviesJson.movies;
                totalMovies = moviesJson.total_movies;
        onsole.log(moviesJson);
        let texto = `Total de películas en cartelera:  ${totalMovies}\n\nListado de Películas:\n`;
        let titulosOrdenados = listOfMovies.map(movie => movie.title).sort();
        titulosOrdenados.forEach((titulo) => cuerpo += `\t${titulo}\n`);
*/
        let texto="Rafa";
        console.log("texto: "+ texto);

        return (texto + '\n\n');
    }
    ,

    armarPie: function () {
        let texto = '\nRecordá que podés visitar las secciones:\n\tEn Cartelera\n\tMás Votadas\n\tSucursales\n\tContacto\n\tPreguntas Frecuentes ';
        return (texto + "\n\n'");
    }


}


module.exports = index;