import SearchBar from "../component/SearchBar";
import Product from "../component/Product";
import Filter from "../component/Filter";
import Loading from "../component/Loading";
import useFilteredData from "../CostumeHook/useFilteredData";
function Shop() {
  const { searchResults, isLoading, error, handleSearch } = useFilteredData();
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
