import PropTypes from "prop-types";
import FilteCategory from "./FilteCategory";
import FiltePrice from "./FiltePrice";
import Applyfilters from "./Applyfilters";
import useFilter from "../CostumeHook/useFilter";

function Filter({ onPriceChange }) {
  const {
    category,
    setCategory,
    isCategoryChecked,
    setIsCategoryChecked,
    isPriceChecked,
    setIsPriceChecked,
    price,
    handlePriceChange,
    handleSubmit,
  } = useFilter(onPriceChange);

  return (
    <div className="bg-white h-160 m-3 p-6 rounded-2xl flex flex-col gap-6 shadow-lg">
      <FilteCategory
        category={category}
        setCategory={setCategory}
        isCategoryChecked={isCategoryChecked}
        setIsCategoryChecked={setIsCategoryChecked}
      />
      <FiltePrice
        price={price}
        handlePriceChange={handlePriceChange}
        isPriceChecked={isPriceChecked}
        setIsPriceChecked={setIsPriceChecked}
      />
      <Applyfilters handleSubmit={handleSubmit} name="Apply filters" />
    </div>
  );
}
Filter.propTypes = {
  onPriceChange: PropTypes.func.isRequired,
};
export default Filter;
