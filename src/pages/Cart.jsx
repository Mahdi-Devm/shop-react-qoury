import { useContextApi } from "../component/contextapi";
import { useState, useEffect } from "react";
import ProducTcART from "../component/ProducTcART.JSX";

import Applyfilters from "../component/Applyfilters";

function Cart() {
  const { newItemCart } = useContextApi();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = newItemCart.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  }, [newItemCart]);

  return (
    <section className="flex flex-row w-full">
      <div className="w-4/5 mt-12 overflow-hidden flex flex-col  items-center">
        <div className="mt-4 text-center bg-white rounded-2xl w-130 py-1 mb-2">
          <h2 className="text-2xl font-semibold text-gray-800">
            Your Shopping Cart
          </h2>
          <p className="text-md text-gray-500">
            Review your items and proceed to checkout
          </p>
        </div>

        <div
          className="grid grid-cols-4 gap-4"
          style={{ maxHeight: "calc(100vh - 150px)", overflowY: "auto" }}
        >
          {newItemCart.length === 0 ? (
            <p className="text-center text-gray-500 w-full">
              No products found.
            </p>
          ) : (
            newItemCart.map((item) => (
              <div key={item.id}>
                <ProducTcART item={item} />
              </div>
            ))
          )}
        </div>
      </div>

      <div className="w-1/5 mt-12 flex flex-col ">
        {newItemCart.length > 0 && (
          <>
            <p className="text-4xl mb-3 text-center font-semibold">Cart</p>
            <div className="mt-6  bg-white  shadow-md h-160 m-3 p-6 rounded-2xl ">
              <p className="text-lg font-semibold">Total Price</p>
              <p className="text-xl font-bold bg-stone-200 p-1 rounded-xl mb-2">
                ${totalPrice.toFixed(2)}
              </p>
              <Applyfilters name="Place your order" />
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;
