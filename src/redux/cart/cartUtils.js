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
