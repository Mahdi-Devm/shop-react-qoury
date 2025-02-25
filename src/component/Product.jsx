import PropTypes from "prop-types";
import { CiShoppingBasket } from "react-icons/ci";

import { useContextApi } from "./contextapi";

function Product({ item }) {
  const { newItemCart, setnewItemCart } = useContextApi();

  function handelshop(item) {
    const isItemInCart = newItemCart.some(
      (cartItem) => cartItem.id === item.id
    );

    if (isItemInCart) {
      console.log("HI");
    } else {
      setnewItemCart((prev) => [...prev, item]);
      console.log(item);
    }
  }

  return (
    <section className="p-4 rounded-2xl gap-3 w-64">
      <div className="bg-white p-4 rounded-2xl flex justify-center items-center w-52 h-52">
        <img
          className="w-40 h-40 object-contain"
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className="text-gray-800 font-semibold text-md w-52">
        {item.title.length > 30 ? item.title.slice(0, 17) + "..." : item.title}
      </div>

      <div className="text-gray-500 text-sm">{item.category}</div>

      <div className="text-xl text-stone-600 flex items-center justify-between p-1 mr-4">
        ${item.price}
        <CiShoppingBasket
          onClick={() => handelshop(item)}
          className="text-2xl bg-[#1A1F16] text-white w-10 h-10 rounded-2xl p-2 cursor-pointer hover:bg-[#22281d]"
        />
      </div>
    </section>
  );
}

Product.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;
