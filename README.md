# Contact CRUD 🚀📝

## What is it about?

I have created a project where you can Create, Read, Update and Delete contact information:

- nodemon
- path
- mysql
- morgan
- express-myconnection
- express
- ejs
- dotenv

## How to open this project:

1. Download the project files.
2. Open the project in your preferred code editor.
3. Open the terminal (cmd) and navigate to the project directory.
4. Install dependencies by running:

```npm install```

5. Download [here](https://www.apachefriends.org/index.html) and install XAMPP to connect to the database.

- Start XAMPP and ensure both Apache and MySQL services are running.
- 
![XAMPP Control Panel](https://static.javatpoint.com/tutorial/xampp/images/xampp-control-panel12.png "XAMPP Control Panel")

6. Access phpMyAdmin:
- Open [phpMyAdmin](http://localhost/phpmyadmin/) or through XAMPP control panel.

7. Set up the MySQL database:
- Open MySQL console in XAMPP and execute the following commands:
  
  ```
  CREATE DATABASE CrudDataBase;
  USE CrudDataBase;
  CREATE TABLE crudNodeAngel(
    id INT(6) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(100) NOT NULL,
    address VARCHAR(300) NOT NULL   
  )AUTO_INCREMENT=1
  ```

8. Verify and adjust `.env` file:
- Ensure the `.env` file in your project root matches your MySQL configuration.

9. Start the project:
- Run the following command in your terminal:
  
  ```
  npm run dev
  ```

10. View the project:
 - Open your browser and go to [http://localhost:3313/](http://localhost:3313/) to view the project.

This should guide you through setting up and running the project successfully.

-----------------------------------------------------------------------------------

# CRUD de Contactos

## ¿De qué se trata?

He creado un proyecto donde puedes Crear, Leer, Actualizar y Eliminar información de contactos:

- nodemon
- path
- mysql
- morgan
- express-myconnection
- express
- ejs
- dotenv

## Cómo abrir este proyecto:

1. Descarga los archivos del proyecto.
2. Abre el proyecto en tu editor de código preferido.
3. Abre la terminal (cmd) y navega hasta el directorio del proyecto.
4. Instala las dependencias ejecutando:

    ```bash
    npm install
    ```

5. Descarga [aquí](https://www.apachefriends.org/index.html) e instala XAMPP para conectar a la base de datos.

- Inicia XAMPP y asegúrate de que ambos servicios Apache y MySQL estén en ejecución.
  
    ![Panel de Control de XAMPP](https://static.javatpoint.com/tutorial/xampp/images/xampp-control-panel12.png "Panel de Control de XAMPP")

6. Accede a phpMyAdmin:
- Abre [phpMyAdmin](http://localhost/phpmyadmin/) o a través del panel de control de XAMPP.

7. Configura la base de datos MySQL:
- Abre la consola de MySQL en XAMPP y ejecuta los siguientes comandos:
  
    ```sql
    CREATE DATABASE CrudDataBase;
    USE CrudDataBase;
    CREATE TABLE crudNodeAngel(
        id INT(6) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL,
        phone VARCHAR(100) NOT NULL,
        address VARCHAR(300) NOT NULL   
    )AUTO_INCREMENT=1;
    ```

8. Verifica y ajusta el archivo `.env`:
- Asegúrate de que el archivo `.env` en la raíz de tu proyecto coincida con tu configuración de MySQL.

9. Inicia el proyecto:
- Ejecuta el siguiente comando en tu terminal:
  
    ```bash
    npm run dev
    ```

10. Visualiza el proyecto:
- Abre tu navegador y ve a [http://localhost:3313/](http://localhost:3313/) para ver el proyecto.

Esto debería guiarte a través de la configuración y ejecución del proyecto con éxito.
