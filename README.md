# Estructura bases de datos 

Se manejaran dos bases de datos una relacional, ideal para:
- Registro de usuario 
- Inicio de sesión
- Recuperación de contraseña
- Administración de roles

Para esta base de datos se manejarán las siguientes tablas:

-- Tabla de Roles  
CREATE TABLE Roles (

    id_rol INT AUTO_INCREMENT PRIMARY KEY,  
    name VARCHAR(100) NOT NULL UNIQUE  
);

-- Tabla de Usuarios   
CREATE TABLE Usuarios(

    id_user INT AUTO_INCREMENT PRIMARY KEY,  
    id_rol INT,
    full_name VARCHAR(100) NOT NULL,
    user_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY(id_rol) REFERENCES Roles(id_rol)
);

--Tabla de Recuperación de Contraseñas  
CREATE TABLE password_resets(

    id_password INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT, 
    token VARCHAR(255) NOT NULL,
    expires_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    used BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(id_user) REFERENCES Usuarios(id_user)
);

## Uso de TIMESTAMP 

En este caso se usará TIMESTAMP para crear automaticamente la fecha y la hora dependiendo del uso horario del servidor o conexion. 
El **DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP** se usa para que se actualicen automaticamente la fecha y hora actual cada vez que se modifica la fila.

- **DEFAULT CURRENT_TIMESTAMP:** cuando se inserta un nuevo registro, ese campo se llena automaticamente con la hora y fecha actual.
- **ON UPDATE CURRENT_TIMESTAMP:** Cada vez que actualizas esa fila, ese campo se vuelve a actualizar con la hora y fecha sin necesidad de hacerlo manualmente. 

