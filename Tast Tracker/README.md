# Task Tracker

Este proyecto es una aplicación de línea de comandos para gestionar tareas en un archivo JSON. Permite crear, leer, actualizar y eliminar tareas de manera sencilla. El propósito de este proyecto es aprender más sobre el backend utilizando Node.js.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

### Archivos Principales

- **app.js**: Contiene la lógica principal de la aplicación, incluyendo funciones para crear, leer, actualizar y eliminar tareas en un archivo JSON.
- **tasks.json**: Archivo JSON donde se almacenan las tareas.
- **package.json**: Archivo de configuración del proyecto, incluyendo dependencias y scripts.

## Funciones Principales

### [`createFileIfNotExists(path)`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22f%3A%5C%5CMisProyectos%5C%5CNodeJS%5C%5CTast%20Tracker%5C%5Capp.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Ff%253A%2FMisProyectos%2FNodeJS%2FTast%2520Tracker%2Fapp.js%22%2C%22path%22%3A%22%2Ff%3A%2FMisProyectos%2FNodeJS%2FTast%20Tracker%2Fapp.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A3%2C%22character%22%3A15%7D%7D%5D%5D "Go to definition")

Verifica si el archivo especificado existe. Si no existe, lo crea con un contenido inicial de un arreglo vacío (`[]`).

### [`readTasks(path)`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22f%3A%5C%5CMisProyectos%5C%5CNodeJS%5C%5CTast%20Tracker%5C%5Capp.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Ff%253A%2FMisProyectos%2FNodeJS%2FTast%2520Tracker%2Fapp.js%22%2C%22path%22%3A%22%2Ff%3A%2FMisProyectos%2FNodeJS%2FTast%20Tracker%2Fapp.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A12%2C%22character%22%3A15%7D%7D%5D%5D "Go to definition")

Lee las tareas del archivo JSON especificado.

### [`writeTasks(path, tasks)`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22f%3A%5C%5CMisProyectos%5C%5CNodeJS%5C%5CTast%20Tracker%5C%5Capp.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Ff%253A%2FMisProyectos%2FNodeJS%2FTast%2520Tracker%2Fapp.js%22%2C%22path%22%3A%22%2Ff%3A%2FMisProyectos%2FNodeJS%2FTast%20Tracker%2Fapp.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A18%2C%22character%22%3A15%7D%7D%5D%5D "Go to definition")

Escribe las tareas en el archivo JSON especificado.

### [`addTask(path, description)`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22f%3A%5C%5CMisProyectos%5C%5CNodeJS%5C%5CTast%20Tracker%5C%5Capp.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Ff%253A%2FMisProyectos%2FNodeJS%2FTast%2520Tracker%2Fapp.js%22%2C%22path%22%3A%22%2Ff%3A%2FMisProyectos%2FNodeJS%2FTast%20Tracker%2Fapp.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A24%2C%22character%22%3A15%7D%7D%5D%5D "Go to definition")

Agrega una nueva tarea con una descripción proporcionada.

### [`updateTask(path, id, description, status)`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22f%3A%5C%5CMisProyectos%5C%5CNodeJS%5C%5CTast%20Tracker%5C%5Capp.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Ff%253A%2FMisProyectos%2FNodeJS%2FTast%2520Tracker%2Fapp.js%22%2C%22path%22%3A%22%2Ff%3A%2FMisProyectos%2FNodeJS%2FTast%20Tracker%2Fapp.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A36%2C%22character%22%3A15%7D%7D%5D%5D "Go to definition")

Actualiza una tarea existente con un nuevo ID, descripción o estado.

### [`deleteTask(path, id)`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22f%3A%5C%5CMisProyectos%5C%5CNodeJS%5C%5CTast%20Tracker%5C%5Capp.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Ff%253A%2FMisProyectos%2FNodeJS%2FTast%2520Tracker%2Fapp.js%22%2C%22path%22%3A%22%2Ff%3A%2FMisProyectos%2FNodeJS%2FTast%20Tracker%2Fapp.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A78%2C%22character%22%3A15%7D%7D%5D%5D "Go to definition")

Elimina una tarea existente por su ID.

### [`listTasks(path, status)`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22f%3A%5C%5CMisProyectos%5C%5CNodeJS%5C%5CTast%20Tracker%5C%5Capp.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Ff%253A%2FMisProyectos%2FNodeJS%2FTast%2520Tracker%2Fapp.js%22%2C%22path%22%3A%22%2Ff%3A%2FMisProyectos%2FNodeJS%2FTast%20Tracker%2Fapp.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A84%2C%22character%22%3A15%7D%7D%5D%5D "Go to definition")

Lista todas las tareas, opcionalmente filtradas por estado.

## Uso

Para ejecutar la aplicación, usa el siguiente comando:
```sh
node app.js <comando> [argumentos]
```
## Comandos Disponibles
-  add <descripción>: Agrega una nueva tarea con la descripción proporcionada.
-  update <id> [descripción] [estado]: Actualiza una tarea existente con el ID proporcionado.
-  delete <id>: Elimina una tarea existente con el ID proporcionado.
-  list: Lista todas las tareas.
-  list-done: Lista todas las tareas completadas.
-  list-not-done: Lista todas las tareas no completadas.
-  list-in-progress: Lista todas las tareas en progreso.

Autor
Proyecto realizado por Jesús Victor Zavaleta Serva.
