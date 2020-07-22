export const addItemToCart = (cartItems, addedItem) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === addedItem.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === addedItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...addedItem, quantity: 1 }];
};

export const reduceItemInCart = (cartItems, cartItemToRemove) => {

  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
