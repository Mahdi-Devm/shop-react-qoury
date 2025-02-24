import PropTypes from "prop-types";

function FiltePrice({
  price,
  handlePriceChange,
  isPriceChecked,
  setIsPriceChecked,
}) {
  return (
    <>
      <div>
        <label className="block text-gray-800 text-lg font-medium mb-2">
          Filter based on price: ${price}
        </label>
        <input
          type="range"
          min="1"
          max="1000"
          value={price}
          onChange={handlePriceChange}
          className="w-full bg-[#22281D] rounded-lg focus:ring-2 focus:ring-[#22281D] transition duration-300"
          style={{
            appearance: "none",
            WebkitAppearance: "none",
            height: "8px",
            background: "#595c56",
            borderRadius: "5px",
            outline: "none",
          }}
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="priceConfirm"
          checked={isPriceChecked}
          onChange={() => setIsPriceChecked(!isPriceChecked)}
          className="mr-2 accent-stone-500/25 "
        />
        <label htmlFor="priceConfirm" className="text-gray-700 text-sm">
          Confirm price change
        </label>
      </div>
    </>
  );
}

FiltePrice.propTypes = {
  price: PropTypes.number.isRequired,
  handlePriceChange: PropTypes.func.isRequired,
  isPriceChecked: PropTypes.bool.isRequired,
  setIsPriceChecked: PropTypes.func.isRequired,
};

export default FiltePrice;
