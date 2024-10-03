const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();
const port = 8080;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// // Configuración de sesiones
// app.use(session({
//   secret: 'mi_secreto',
//   resave: false,
//   saveUninitialized: false,
//   cookie: { secure: false } // Cambiar a true en producción
// }));

// Importar rutas
const routes = require('./routes/routes');
//console.log(registerRoutes)

app.use(express.json())
// Usar las rutas
app.use('/', routes);


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
