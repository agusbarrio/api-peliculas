# api-peliculas

Aplicación CRUD que permite administrar las películas
de una base de datos mediante una interfaz gráfica

Puede ver el despliegue de la aplicación en (PENDIENTE)

Para iniciar localmente:

1 - Si no la posee, crear la base de datos en MySQL.
Ejecutar los siquientes comandos en la linea de comandos de MySQL o en MySQLWorkbench:

    CREATE DATABASE IF NOT EXISTS db-name;
    USE db-name;

2 - Clonar el repositorio.
Abrir Git Bash en la carpeta donde se desea guardar el proyecto y ejecutar:

    $ git clone https://github.com/agusbarrio/api-peliculas.git

3 - Cambiar el nombre del archivo example.env a .env. Modificar el contenido del archivo con los datos correspondientes de su usuario local de MySQL.
Por ejemplo:

      DB_NAME=db-name
      DB_USER=root
      DB_PASSWORD=
      DB_HOST=127.0.0.1

4 - Instalar las dependencias necesarias:

    npm install

5 - Iniciar la aplicación localmente:

    npm start

Ejemplo de modelo de película:

```json
{
  "movie_id": "tt0372784",
  "title": "Batman Begins",
  "release_year": 2005,
  "raing": 8.3
}
```
