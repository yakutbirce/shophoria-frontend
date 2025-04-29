
export const addProductToCart = (cart, newProduct) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(
      (item) => item.product.id === newProduct.id
    );
  
    if (existingItemIndex !== -1) {
     
      updatedCart[existingItemIndex].count += 1;
    } else {
    
      updatedCart.push({
        count: 1,
        checked: true,
        product: newProduct,
      });
    }
  
    return updatedCart;
  };
  