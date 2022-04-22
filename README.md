Crear una API en NodeJS

1. Crear carpeta node_resapi_sqlserver
2. Arrastar carpeta dentro del vs code.
3. Crear proyecto en node js, usando: npm init -y [crea el archivo package.json, donde se listan todas las dependencias que se necesitan]
4. Instalar dependencias del proyecto : npm i mssql express morgan cors dotenv
   mssql [para interactuar con la base de datos sql server]
   express [framework de node para configurar las urls (rutas), acciones cuando un usuario visite una url].
   morgan [para ver las peticiones que van llegando]
   cors [para conectar un backend con otro. para desplegar la aplicacion.]
   dotenv [para definir variables de entorno (variables que estan alojadas en el sistema operativo)]
5. Instalar herramientas solo para el desarrollo: npm i @babel/core @babel/cli @babel/preset-env @babel/node nodemon -D
   @babel/core [Compilador]
   @babel/cli [para utilizar babel desde consola]
   @babel/preset-env [Convierte el codigo javascript moderno al actual]
   @babel/node [para decile a node que se va a interpretar el codigo usando babel]
   nodemon [reinicia el codigo cada vez que se hace un cambio.]
   -D [solo para desarrollo.]
6. En la raiz del proyecto creamos el archivo .babelrc para colocar una configuracion que necesita babel para funcionar:
   {
   "presets": ["@babel/preset-env"]
   }
7. Creamos carpeta src para ubicar alli nuestro codigo fuente
8. Dentro de la carpeta src creamos el archivo index.js con la linea console.log('hola mundo') para afinamiento y arrancar la aplicacion
9. Actualizamos el archivo package.json seccion scripts, para solo ejecutar npm run dev en la terminal:
   "scripts":{
   "dev":"nodemon src/index.js --exec babel-node"
   }
10. Establecemos la estructura basica de carpetas:
    src
    routes [para definir las rutas]
    database [para conexiones, Select,Insert, Update, Delete a la base de datos]
    controllers [codigo que se va a ejecutar cuando se visiten las rutas]
    app.js [para configurar la aplicacion de express]
    import express from 'express';
    const app = express();
    export default app;
    config.js [para configuraciones generales]
    index.js [Actualizar por]
    import app from './app';
    app.listen(3000);
    console.log('Servidor escuchando en el puerto ' + 3000);
    .env [Definir las variables de entorno]
    PORT:6000
    .gitignore [para especificar los archivos que git va ignorar
    .env
    node_modules
11. Probamos si el Servidor realmente esta escuchando en el puerto 3000 en Google Chrome
    localhost:3000
    debe aparecer Cannot Get
12. Habilitar protoco TCP para conectarnos a una base de datos.
    Este Equipo boton derecho Administrar
    luego en Servicios y Aplicaciones/SQL Server Configuration Manager/SQl Server Network Configuration/Protocolos for MSSQLSERVER
    y habilitamos el protocolo TCP, asi TCP/IPS=Enabled. En la pestaña de IP Adress podemos ver el puerto por defecto 1433

    luego en Servicios y Aplicaciones/SQL Server Configuration Manager/SQL Server Services boton derecho restart

13. Instalar REST Client para hacer peticiones desde visual studio code y probar que el API funcionara desde el FrontEnd
