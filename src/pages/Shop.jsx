import { useQuery } from "@tanstack/react-query";
import SearchBar from "../component/SearchBar";
import Product from "../component/Product";
import Filter from "../component/Filter";
import { useEffect, useState } from "react";
import Loading from "../component/Loading";
import { useContextApi } from "../component/contextapi";

function Shop() {
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
        item.title.toLowerCase().includes(searchTerm)
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults(data);
    }
  };

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="flex flex-row w-full">
      <div className="w-4/5 mt-12 overflow-hidden">
        <SearchBar onSearch={handleSearch} />

        <div
          className="grid grid-cols-4 gap-4"
          style={{ maxHeight: "calc(100vh - 150px)", overflowY: "auto" }}
        >
          {searchResults.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="w-1/5 mt-12 flex flex-col ">
        <p className="text-4xl mb-3 text-center font-semibold">Filter</p>
        <Filter />
      </div>
    </section>
  );
}

export default Shop;
