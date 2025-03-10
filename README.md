# 📌 Proyecto React - Autenticación y Estructura de Navegación

Este es un proyecto en desarrollo construido con **React** que incluye un sistema de autenticación, un navbar, un footer y una estructura de navegación básica.

## 🚀 Instalación y ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
###  2️⃣ Instalar dependencias
npm install
### 3️⃣ Iniciar el servidor JSON
npx json-server --watch datos/db.json --port 5000
### 4️⃣ Iniciar la aplicación React
npm start

🔐 Autenticación
El sistema de autenticación se encuentra en desarrollo. Actualmente, el login funciona con JSON Server, pero la autenticación con Google OAuth está en construcción y será integrada en una versión futura.

📂 src/
 ┣ 📜 App.jsx           # Configuración de rutas y autenticación
 ┣ 📜 Navbar.jsx        # Barra de navegación
 ┣ 📜 Footer.jsx        # Pie de página
 ┣ 📜 Home.jsx          # Página principal
 ┣ 📜 Login.jsx         # Página de inicio de sesión (con JSON Server)
 ┣ 📜 Dashboard.jsx     # Página protegida después del login
 ┣ 📜 datos/db.json     # Base de datos JSON para autenticación


📜 Historial de versiones
✅ Versión 1.0.0 - Estructura Inicial
Se creó la estructura base de la aplicación con Navbar, Footer y Home.
✅ Versión 1.1.0 - Autenticación con JSON Server
Se añadió la página Login.jsx.
Se implementó la autenticación con json-server en el puerto 5000.
Se agregó la pantalla protegida Dashboard.jsx después del login.
🚧 Versión 1.2.0 - En Desarrollo 🚧
Se está integrando Google OAuth para autenticación segura.
Mejoras en la seguridad del login.

🛠 Tecnologías utilizadas
⚛ React (Frontend)
🎨 Tailwind CSS (Estilos)
📡 JSON Server (Simulación de Base de Datos)
🔑 Google OAuth (En Desarrollo)