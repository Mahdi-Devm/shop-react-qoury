import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useContextApi } from "./contextapi";

const useFilteredData = () => {
  const { newItem } = useContextApi();
  const newFilter = newItem.category;
  const priceFilter = newItem.price || 0;

  const { data, error, isLoading } = useQuery({
    queryKey: ["my-data", newFilter, priceFilter],
    queryFn: () =>
      !newFilter || newFilter === ""
        ? fetch("https://fakestoreapi.com/products").then((res) => res.json())
        : fetch(`https://fakestoreapi.com/products/category/${newFilter}`).then(
            (res) => res.json()
          ),
  });

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (data) {
      let filteredData = data;
      if (priceFilter > 0) {
        filteredData = filteredData.filter((item) => item.price <= priceFilter);
      }
      setSearchResults(filteredData);
    }
  }, [data, priceFilter]);

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const filteredResults = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults(data);
    }
  };

  return {
    searchResults,
    isLoading,
    error,
    handleSearch,
  };
};

export default useFilteredData;
