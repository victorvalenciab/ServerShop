//Validar si el usuario esta registrado o no para hacer la compra 

// app.get('/shop-server', (req, res) => {
//     // Redirige a la página de compra del servidor
//     res.redirect('/shop-server');
// });
console.log("HOLA");


document.getElementById('shop').addEventListener('click', function() {
    console.log("Login validaciones");
    //Hacemos una petición al servidor para verificar la sesión
    fetch('/check-session')
        .then(response => response.json())
        .then(data => {
            if (data.isLoggedIn) {
                // Si está logueado, redirigimos a la página de compra
                window.location.href = '/shop-server';
            } else {
                // Si no está logueado, redirigimos a la página de login
                window.location.href = '/login';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al procesar tu solicitud. Por favor, intenta de nuevo.');
        });
});
