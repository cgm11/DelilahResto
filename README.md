# DelilahResto_CarolinaGarcia

Guia para instalación y uso del api

1. El repositorio se encuentra en la ruta: https://gitlab.com/cgm11/delilahresto_carolinagarcia

2. Instalar las dependencia (npm install)

3. Crear la base de datos CREATE DATABASE IF NOT EXISTS delilahresto

4. configurar las variables de entorno. Las variables se encuentran configuradas en el archivo envVariables.json validar si son las mismas y en caso contrario editarlas para un correcto funcionamiento

5. Iniciar el proyecto (npm start). Cuando se inicie el proyecto deben aparecer los mensajes de creación de las tablas necesarias y finalmente el mensaje "Server is ready"

6. Ejecutar en una terminal diferente el script seed.js (npm run seed). Con esto se van a crear los datos necesarios para las tablas intermedias, como lo son paymentMethods, statusOrder, userType y también el usuario administrador con los siguientes datos de ingreso:

username: admin
email: admin@delilah.com
password: 2222

7. descargar rutas en postman: ingresar a la ruta https://app.getpostman.com/run-collection/825827a2a6f936a999e9
Seleccionar Postman for Windows y en el mensaje emergente que aparece seleccionar abrir postman

8. Usar la api



