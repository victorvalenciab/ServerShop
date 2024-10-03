// src/services/authService.js
function checkAuthenticated(req, res, next) {
    if (req.session && req.session.userId) {
        return next(); // Usuario autenticado
    }
    res.redirect('/login'); // Redirigir si no está autenticado
}

module.exports = { checkAuthenticated };
