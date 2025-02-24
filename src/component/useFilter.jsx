import { useState } from "react";
import { useContextApi } from "./contextapi";

function useFilter(onPriceChange) {
  const [category, setCategory] = useState("");
  const [isCategoryChecked, setIsCategoryChecked] = useState(false);
  const [isPriceChecked, setIsPriceChecked] = useState(false);
  const { setnewItem } = useContextApi();
  const [price, setPrice] = useState(0);

  const handlePriceChange = (event) => {
    const newPrice = event.target.value;
    setPrice(newPrice);
    onPriceChange(newPrice);
  };

  function handleSubmit() {
    const newFilter = {};

    if (isCategoryChecked) {
      newFilter.category = category;
    }

    if (isPriceChecked) {
      newFilter.price = price;
    }

    setnewItem(newFilter);
  }

  return {
    category,
    setCategory,
    isCategoryChecked,
    setIsCategoryChecked,
    isPriceChecked,
    setIsPriceChecked,
    price,
    setPrice,
    handlePriceChange,
    handleSubmit,
  };
}

export default useFilter;
