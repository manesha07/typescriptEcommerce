import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { authService } from "../authentication/authentication";

interface Product {
id: number;
price: number;
cartQuantity: number;
}

interface CartState {
  cart: {
    count: number;
    products: Product[];
  };
}

let cartTotal = 0;
let shippingTotal = 0;
let total = 0;

const Cart: React.FC = () => {
  const [cartLength, setCartLength] = useState(0);
  // const products = useSelector((state) => {
  //   return state.cart.products;
  // });
// Use selector hook to get the cart data from the Redux store
const cart = useSelector((state: CartState) => {
return state.cart;
});

const productString = localStorage.getItem('cart');
const products =  productString ? JSON.parse( productString) : null;
  // const products = JSON.parse(localStorage.getItem("cart")); // Get cart items from local storage

  console.log("cart items,", products);

  const [currentUser, setCurrentUser] = useState(undefined); // State hook to get the current user from the authService
  console.log("currenttt", currentUser);

  // UseEffect hook to retrieve the current user and set it to the currentUser state
  useEffect(() => {
    const user = authService.getCurrentUser();
    console.log("userla", user);

    if (user) {
      setCurrentUser(user.currentUser);
    }
  }, []);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartCounts = cart.reduce((acc:any, item:any) => acc + item.cartQuantity, 0);
    setCartLength(cartCounts);
  }, [cart.count]);

  return (
    <>{products ? <div>
      <p className="text-[40px]">Cart Items({cartLength})</p>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Payment Details
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Payment Calculation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Sub Total:
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {
                        (cartTotal = products.reduce((total:any, item:any) => {
                          return total + item.cartQuantity * item.price;
                        }, 0))
                      }
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Shipping 10%:
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {(shippingTotal = 0.1 * cartTotal)}
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Total:
                    </td>

                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {(total = cartTotal + shippingTotal)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {total === 0 ? (
          <h1> Please add to Cart</h1>
        ) : (
          <button className=" bg-gray-800 text-white  ">
            <Link to="/checkout">Click here to Proceed to Checkout</Link>
          </button>
        )}
      </div>

      <hr />

      <div className="flex flex-wrap">
        {products &&
          products.slice(0, 10).map((item:any) => {
            return (
              <>
                <Link to={`../products/${item.id}`}>
                  <div
                    key={item.id}
                    className="card h-[373] w-[234px] inline-block text-center shadow-xl m-[20px] hover:mt-[-0.5px]"
                  >
                    <img
                      src={item.images}
                      alt={item.id + "img"}
                      className="p-[10px] h-[233px] w-[233px]"
                    />
                    <span className="p-[10px] text-orange-500">
                      {item.name}
                    </span>
                    <span className="p-[10px] text-orange-500 text-end">
                      ({item.cartQuantity})
                    </span>
                    <p className="pb-[10px]">Rs.{item.price}</p>
                  </div>
                </Link>
              </>
            );
          })}
      </div>
      </div>: 
      <div>
        <p>No products on cart</p>
      </div>}
    </>
  );
};

export default Cart;