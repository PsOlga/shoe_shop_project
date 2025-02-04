import axios from "axios";
import { useEffect, useState } from "react";
import CartItem from "../CartItem";
function Cart() {
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    getCartItems();
  }, []);
  async function getCartItems() {
    try {
      const response = await axios.get(
        "https://66f3c85c77b5e8897096cde3.mockapi.io/cartImage"
      );
      setCartList(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Корзина</h1>
      {cartList.length === 0 ? (
        <h3>Ваша корзина пуста...</h3>
      ) : (
        <div>
          <div>
            {cartList.map((cartItem) => {
              return <CartItem key={cartItem.id} {...cartItem} />;
            })}
          </div>
          <div>
            <h3>Итого</h3>
            <div></div>
            <h3>Цена: </h3>
          </div>
        </div>
      )}
    </div>
  );
}
export default Cart;