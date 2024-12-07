**#Food Organiser - Fullstack project **

Esta aplicación permite a los usuarios planificar su menú semanal y gestionar una lista de compras asociada. Se trata de un proyecto full stack con un backend desarrollado en Node.js y MongoDB, que proporciona una API REST para interactuar con los datos del menú y los ítems de la lista de compras.

### Requisitos Previos:
-Node.js (v14 o superior)
-MongoDB Atlas (se necesita una cuenta y una conexión configurada)
-Una terminal o entorno de desarrollo como VS Code

## Características Principales
Gestión de ítems de la lista de compras:
Crear, actualizar, listar y eliminar ítems.
Planificación del menú semanal:
Crear o actualizar menús semanales con comidas específicas para cada día.
Restablecer el menú semanal.
Obtener el menú de la semana actual.

### Repositorio de frontend asociado a este repositorio: 
-> https://github.com/dem116/fullstack-project-front

### Tecnologías y Librerías Utilizadas
Backend:
Node.js: Plataforma principal.
Express: Framework para la gestión de rutas y middleware.
MongoDB: Base de datos NoSQL.
Mongoose: ODM para la comunicación con MongoDB.
Moment.js: Para el manejo de fechas y semanas.
Dotenv: Gestión de variables de entorno.
CORS: Permitir solicitudes desde diferentes orígenes.


### Estructura de Archivos
```
fullstack-project/
├── config/
│   └── db.js                 # Configuración de la base de datos
├── controllers/
│   ├── controllerList.js     # Controladores para los ítems de la lista
│   └── controllerMenu.js     # Controladores para el menú semanal
├── models/
│   ├── ItemLista.js          # Modelo para los ítems de la lista
│   └── WeekMenu.js           # Modelo para el menú semanal
├── routes/
│   └── RoutesAPI.js          # Definición de rutas de la API
├── public/                   # Archivos estáticos (opcional)
├── index.js                  # Punto de entrada principal
├── package.json              # Información del proyecto y dependencias
├── .env                      # Variables de entorno (no incluido por seguridad)
└── README.md                 # Documentación del proyecto
```

## Modelos

### ItemLista 
```
{
  "item": "string" // Nombre del ítem (requerido)
}
```

### WeekMenu
```
{
  "week": "string",   // Identificador único basado en la semana del año
  "days": [
    {
      "day": "string",        // Día de la semana
      "breakfast": { "meal": "string" }, 
      "lunch": { "meal": "string" },    
      "dinner": { "meal": "string" }    
    }
  ]
}
```

## Endpoints y Funcionalidades

### Lista de Compras

-GET /items
Devuelve todos los ítems de la lista.
Respuesta:
[
  { "item": "string", "_id": "string", "createdAt": "date", "updatedAt": "date" }
]

-POST /itemcreate
Crea un nuevo ítem en la lista.
Cuerpo de la solicitud:
{ "item": "string" }

-PUT /item/:itemId
Actualiza un ítem existente por su ID.
Cuerpo de la solicitud:
{ "item": "string" }

-DELETE /item/delete/:itemId
Elimina un ítem existente por su ID.

### Menú Semanal
GET /menu
Devuelve el menú de la semana actual.
Respuesta:
{
  "week": "string",
  "days": [
    { "day": "string", "breakfast": { "meal": "string" }, "lunch": { "meal": "string" }, "dinner": { "meal": "string" } }
  ]
}

-POST /menucreate
Crea o actualiza el menú de la semana actual.
Cuerpo de la solicitud:
{
  "days": [
    {
      "day": "string",
      "breakfast": { "meal": "string" },
      "lunch": { "meal": "string" },
      "dinner": { "meal": "string" }
    }
  ]
}

-PUT /menu/reset
Restablece el menú de la semana actual eliminando todas las comidas.
Respuesta:
{ "message": "Menu reseted", "resetMenu": { "week": "string", "days": [] } }


## Instrucciones de Configuración

1-Clonar el repositorio:
git clone https://github.com/usuario/fullstack-project.git
cd fullstack-project

2-Instalar dependencias:
npm install

3-Configurar variables de entorno:
Crear un archivo .env con el siguiente contenido:
PORT=3000
MONGO_URL=mongodb+srv://usuario:contraseña@cluster.mongodb.net/miBaseDeDatos

4-Ejecutar el servidor:
npm start

El servidor estará disponible en http://localhost:3000.


## Proximas implementaciones
```
-Implementar autenticación de usuarios a través de firebase y que los datos esten asociados a cada usario (una lista y menu propios para cada usuario)
-Ruta para editar items en el front end, en conjunto con más datos para cada item como: cantidad y/o descripción
-Endpoinst y modelos para crear recetas y automatizaciones para que los ingredientes se agreguen automaticamente a la lista de compra.
```