- La [documentación oficial](https://digimon-api.herokuapp.com/) de la API dice que la ruta que estás usando en tu app está **deprecada**, la nueva ruta es https://digimon-api.vercel.app/api/digimon.

- No funciona la búsqueda **Random Digimon** porque la API no permite buscar por número, tenés que buscar una manera (por ejemplo trayendo todos los Digimons y quedándote con uno de manera random) o sacar esa opción.

- No está funcionando bien la funcionalidad de **favorites** porque no estás manejando correctamente como llega la data de la API. La API devuelve siempre un _array_ aunque el resultado sea uno solo. Lo podés ver fácilmente accediendo desde el navegador a la ruta de búsqueda -> https://digimon-api.vercel.app/api/digimon/name/agumon
    - (En la línea 55 de `HomePage.js` lo hiciste bien)