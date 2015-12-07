app.factory('cartService', cartService);

function cartService() {
  var factory = {
    getCart: getCart,
    clearCart: clearCart
  };

  var cart = [];

  return factory;

  function getCart() {
    return cart;
  }

  function clearCart() {
    cart = [];
    return cart;
  }

}
