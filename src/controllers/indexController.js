const path = require('path');


class IndexController {
    // Renderizar la página de registro
    getIndexPage = (req, res) => {
      res.sendFile(path.join(__dirname, '../views/index.html'));
    };
}

module.exports = new IndexController();