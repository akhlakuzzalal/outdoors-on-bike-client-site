const useCart = () => {
   const getDB = () => localStorage.getItem('cart');
   const updateDb = cart => localStorage.setItem('cart', JSON.stringify(cart));

   // Set A new Cart to the Local Storage
   const setCart = id => {
      const exist = getDB();
      let cart = {};
      if (!exist) {
         cart[id] = 1
      }
      else {
         cart = JSON.parse(exist);
         if (cart[id]) {
            const newCount = cart[id] + 1;
            cart[id] = newCount;
         }
         else {
            cart[id] = 1;
         }
      }
      updateDb(cart)
   };

   // Delete a Cart From the Local Storage
   const deleteDB = name => {
      const exist = getDB();
      if (!exist) {

      }
      else {
         const cart = JSON.parse(exist);
         delete cart[name];
         updateDb(cart)
      }
   }

   // Get the cart from the Local Storage

   const getSavedCart = () => {
      const exist = getDB();
      return exist ? JSON.parse(exist) : {};
   }

   return {
      setCart,
      deleteDB,
      getSavedCart
   }
}
export default useCart;