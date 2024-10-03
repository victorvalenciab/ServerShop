const path = require('path');
const UserService = require('../services/userService');



class LoginController {
  // Renderizar la página de registro
  getLoginPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
  };

  // Manejar el login de usuarios
  async login(req, res) {
      try {
          const userData = req.body;
          //console.log("datos del body" + userData)
          const user = await UserService.loginUser(userData);
          res.status(201).json(user);
      } catch (error) {
          res.status(400).json({ error: error.message });
      }
  }
}

// src/controllers/loginController.js
const loginController = {
  showLogin: (req, res) => {
      res.render('login'); // Mostrar el formulario de login
  },
  processLogin: (req, res) => {
      const { username, password } = req.body;
      
      // Validar usuario (esto es solo un ejemplo, reemplaza con tu lógica)
      if (username === 'admin' && password === '1234') {
          req.session.userId = 1; // Almacenar el userId en la sesión
          res.redirect('/shop'); // Redirigir a la tienda
      } else {
          res.redirect('/login'); // Si falla, redirigir de nuevo al login
      }
  }
};

module.exports = loginController;

module.exports = new LoginController();

