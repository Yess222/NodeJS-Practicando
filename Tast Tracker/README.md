# Task Tracker <a href="https://roadmap.sh/projects/task-tracker">link</a>

Este proyecto es una aplicación de línea de comandos para gestionar datos en un archivo JSON. Permite crear, leer, actualizar y eliminar datos de manera sencilla. El propósito de este proyecto es aprender más sobre el backend utilizando Node.js.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

### Archivos Principales

- **app.js**: Contiene la lógica principal de la aplicación, incluyendo funciones para crear, leer, actualizar y eliminar datos en un archivo JSON.
- **data.json**: Archivo JSON donde se almacenan los datos.
- **package.json**: Archivo de configuración del proyecto, incluyendo dependencias y scripts.

## Funciones Principales

### [`createFileIfNotExists(path)`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22f%3A%5C%5CMisProyectos%5C%5CNodeJS%5C%5CTast%20Tracker%5C%5Capp.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Ff%253A%2FMisProyectos%2FNodeJS%2FTast%2520Tracker%2Fapp.js%22%2C%22path%22%3A%22%2Ff%3A%2FMisProyectos%2FNodeJS%2FTast%20Tracker%2Fapp.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A3%2C%22character%22%3A15%7D%7D%5D%5D "Go to definition")

Verifica si el archivo especificado existe. Si no existe, lo crea con un contenido inicial de un arreglo vacío (`[]`).

### [`readData(path)`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22f%3A%5C%5CMisProyectos%5C%5CNodeJS%5C%5CTast%20Tracker%5C%5Capp.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Ff%253A%2FMisProyectos%2FNodeJS%2FTast%2520Tracker%2Fapp.js%22%2C%22path%22%3A%22%2Ff%3A%2FMisProyectos%2FNodeJS%2FTast%20Tracker%2Fapp.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A12%2C%22character%22%3A15%7D%7D%5D%5D "Go to definition")

Lee y muestra todos los datos del archivo JSON especificado.

### [`readAndAddData(path, data)`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22f%3A%5C%5CMisProyectos%5C%5CNodeJS%5C%5CTast%20Tracker%5C%5Capp.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Ff%253A%2FMisProyectos%2FNodeJS%2FTast%2520Tracker%2Fapp.js%22%2C%22path%22%3A%22%2Ff%3A%2FMisProyectos%2FNodeJS%2FTast%20Tracker%2Fapp.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A24%2C%22character%22%3A15%7D%7D%5D%5D "Go to definition")

Lee los datos del archivo JSON, agrega un nuevo dato con un ID único y guarda los cambios en el archivo.

### [`updateData(path, id, data)`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22f%3A%5C%5CMisProyectos%5C%5CNodeJS%5C%5CTast%20Tracker%5C%5Capp.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Ff%253A%2FMisProyectos%2FNodeJS%2FTast%2520Tracker%2Fapp.js%22%2C%22path%22%3A%22%2Ff%3A%2FMisProyectos%2FNodeJS%2FTast%20Tracker%2Fapp.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A49%2C%22character%22%3A15%7D%7D%5D%5D "Go to definition")

Actualiza un dato existente en el archivo JSON basado en el ID proporcionado. Si el dato no se encuentra, muestra un mensaje indicando que no se encontró el dato.

### [`deleteData(path, id)`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22f%3A%5C%5CMisProyectos%5C%5CNodeJS%5C%5CTast%20Tracker%5C%5Capp.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Ff%253A%2FMisProyectos%2FNodeJS%2FTast%2520Tracker%2Fapp.js%22%2C%22path%22%3A%22%2Ff%3A%2FMisProyectos%2FNodeJS%2FTast%20Tracker%2Fapp.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A78%2C%22character%22%3A15%7D%7D%5D%5D "Go to definition")

Elimina un dato del archivo JSON basado en el ID proporcionado. Si el dato no se encuentra, muestra un mensaje indicando que no se encontró el dato.

## Uso

Para utilizar la aplicación, puedes ejecutar los siguientes comandos en la línea de comandos:

- **Crear un nuevo dato**:
  ```sh
  node app.js create <nombre> <edad>

- **Leer todos los datos**:
  ```sh
  node app.js read
- **Actualizar un dato existente**:
  ```sh
  node app.js update <id> <nuevo_nombre> <nueva_edad>
- **Eliminar un dato**:
  ```sh
  node app.js delete <id>
- **Ejemplo**:
  ```sh
  # Crear un nuevo dato
  node app.js create "Juan Perez" 30

  # Leer todos los datos
  node app.js read

  # Actualizar un dato existente
  node app.js update 1 "Juan Carlos Perez" 31

  # Eliminar un dato
  node app.js delete 1
Proyecto realizado por Jesús Victor Zavaleta Serva.
