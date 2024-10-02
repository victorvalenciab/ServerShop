const path = require('path');


class ShopController {
    // Renderizar la página de registro
    getShopPage = (req, res) => {
      res.sendFile(path.join(__dirname, '../views/shop.html'));
    };
}

module.exports = new ShopController();