Coworking Management API

Descripción

Esta API permite gestionar un sistema de coworking, incluyendo la creación y administración de espacios de coworking, reservas y usuarios. Los administradores pueden gestionar todos los aspectos de la aplicación, mientras que los usuarios normales solo pueden interactuar con sus propias reservas.

Tecnologías

Node.js

Express

MongoDB (Mongoose)

JWT (JSON Web Tokens) para autenticación

Bcrypt para encriptación de contraseñas

Instalación

Clona este repositorio:

bash

Copiar código

git clone <tu-repositorio>

Navega a la carpeta del proyecto:

bash

Copiar código

cd <tu-carpeta>

Instala las dependencias:

bash

Copiar código

npm install

Configura las variables de entorno en un archivo .env (asegúrate de incluir las credenciales de tu base de datos MongoDB y cualquier otra configuración necesaria).

Estructura del Proyecto

bash

Copiar código

/api

├── /controllers          # Controladores de la API

├── /middlewares          # Middleware de autenticación y autorización

├── /models               # Modelos de datos (Mongoose)

├── /routes               # Rutas de la API

└── /config               # Configuración de la API

Rutas

Autenticación y Usuarios

POST /api/users/register: Registrar un nuevo usuario (solo rol 'user').

POST /api/users/login: Iniciar sesión y obtener un token.

GET /api/users: Obtener todos los usuarios (solo administradores).

PATCH /api/users/:id: Cambiar el rol de un usuario (solo administradores).

DELETE /api/users/:id: Eliminar un usuario (administradores pueden eliminar cualquier usuario, los usuarios pueden eliminarse a sí mismos).

Coworkings

GET /api/coworkings: Obtener todos los espacios de coworking (solo administradores).

POST /api/coworkings: Crear un nuevo espacio de coworking (solo administradores).

GET /api/coworkings/:id: Obtener un espacio de coworking específico.

PUT /api/coworkings/:id: Actualizar un espacio de coworking específico (solo administradores).

DELETE /api/coworkings/:id: Eliminar un espacio de coworking específico (solo administradores).

Reservas

GET /api/reservations: Obtener todas las reservas (solo administradores).

POST /api/reservations: Crear una nueva reserva (cualquier usuario autenticado).

GET /api/reservations/:id: Obtener una reserva específica (administradores o el usuario que realizó la reserva).

PUT /api/reservations/:id: Actualizar una reserva (administradores o el usuario que realizó la reserva).

DELETE /api/reservations/:id: Eliminar una reserva (administradores o el usuario que realizó la reserva).

Autenticación y Autorización

La API utiliza JWT para la autenticación. Al iniciar sesión, el usuario recibe un token que debe incluir en el encabezado Authorization en sus solicitudes.

Ejemplo de cómo obtener un token:

Realiza una solicitud POST a /api/users/login con el cuerpo:

json

Copiar código

{

"email": "usuario@example.com",

"password": "tu\_contraseña"

}

Recibirás un token en la respuesta que debes utilizar para las solicitudes protegidas.

Ejemplo de uso

Puedes utilizar herramientas como Insomnia o Postman para probar la API. Asegúrate de incluir el token en las solicitudes que requieran autenticación.

Ejemplo de solicitud con token:

http

Copiar código

GET /api/reservations

Authorization: Bearer <tu\_token>

Contribuciones

Las contribuciones son bienvenidas. Si tienes alguna mejora o corrección, siéntete libre de hacer un pull request.

Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

