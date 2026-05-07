# CineCotinix - Sistema de Gestión de Cine

Este proyecto es una solución de backend robusta diseñada para la administración integral de una cadena de cines. Permite gestionar desde la infraestructura física (cines y salas) hasta la programación de películas y la venta de entradas.

## 🚀 Tecnologías Utilizadas

*   **Node.js**: Entorno de ejecución para JavaScript.
*   **Express**: Framework web para la creación de la API.
*   **Sequelize**: ORM para la gestión de la base de datos relacional.
*   **MySQL**: Sistema de gestión de base de datos (Sugerido).
*   **CORS**: Intercambio de recursos de origen cruzado.
*   **Dotenv**: Gestión de variables de entorno.

## 🛠️ Funcionalidades Principales

### 🏢 Infraestructura
*   **Gestión Multi-Cine:** Registro de complejos cinematográficos con ubicación y detalles.
*   **Administración de Salas:** Soporte para diversos tipos de salas (Tradicional, 3D, IMAX, VIP, etc.).
*   **Manejo de Asientos:** Control de la disposición y disponibilidad de asientos por sala y función.

### 🎬 Contenido y Programación
*   **Catálogo de Películas:** Gestión de títulos, géneros, duraciones y clasificaciones.
*   **Cartelera Dinámica:** Programación de películas en salas y horarios específicos.
*   **Control de Funciones:** Administración de los horarios de proyección.

### 🎟️ Operaciones
*   **Venta de Entradas:** Registro de transacciones y validación de acceso.
*   **Validaciones de Negocio:** Control de restricciones de edad y disponibilidad en tiempo real.

## 📂 Estructura del Proyecto

*   `backend/Models/`: Definición de las entidades y relaciones de la base de datos.
*   `backend/Controllers/`: Lógica de negocio y manejo de peticiones.
*   `backend/Routes/`: Definición de los endpoints de la API.
*   `backend/Migrations/`: Scripts para la evolución del esquema de la base de datos.
*   `backend/Config/`: Configuración de la conexión a la base de datos.

## ⚙️ Instalación y Configuración

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/scotogfwdGG/CineCotinix.git
    ```
2.  Instala las dependencias:
    ```bash
    cd PrácticaCine/backend
    npm install
    ```
3.  Configura las variables de entorno en un archivo `.env` dentro de la carpeta `backend/`.
4.  Ejecuta las migraciones:
    ```bash
    npx sequelize-cli db:migrate
    ```
5.  Inicia el servidor:
    ```bash
    npm start
    ```

---
Desarrollado como parte de la práctica profesional de servicios de cine.
