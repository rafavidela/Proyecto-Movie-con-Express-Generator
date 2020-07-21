
var contacto={

    armarEncabezado: function () {
        let texto = `Contáctanos`;

    return (texto);
    },
    
    armarCuerpo: function () {
        let texto = `¿Tenés algo para contarnos? Nos encanta escuchar a nuestros clientes. 
Si deseas contactarnos podés escribirnos al siguiente email: dhmovies@digitalhouse.com o en las redes sociales.
Envianos tu consulta, sugerencia o reclamo y será respondido a la brevedad posible. Recordá que también podes consultar la sección de Preguntas Frecuentes para obtener respuestas inmediatas a los problemas más comunes`;

    return (texto);
    },
    
    armarPie: function () {
        let texto = '\nRecordá que podés visitar las secciones:\n\tEn Cartelera\n\tMás Votadas\n\tSucursales\n\tContacto\n\tPreguntas Frecuentes';
        return (texto);
    }


}


module.exports = contacto;
