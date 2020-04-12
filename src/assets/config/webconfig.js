/**
 * Function auto invocativa responsável por configurar a 'base-url',
 * com as configurações dinâmicas do arquivo '/assets/config/webconfig.json.
 * 
 * @author Luiz Oliveira
 * @since 12/04/2020
 */

(async function() {
    await fetch('./assets/config/webconfig.json')
        .then((resp) => resp.json())
        .then((resp) => {
            document.baseURI = resp.angularUrl;
            document.querySelector('base').href = resp.angularUrl;
        });
})();