app.factory('cartService', cartService);

function cartService() {
  var factory = {
    getCart: getCart
  };

  var cart = [];

  return factory;

  function getCart() {
    return cart;
  }

}
