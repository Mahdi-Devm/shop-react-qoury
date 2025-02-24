import { useState } from "react";
import PropTypes from "prop-types";
function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event) => {
    onSearch(event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-1 m-2 border-0 border-stone-600 ">
      <input
        className="bg-white p-3 w-[507px] rounded-2xl text-stone-700 outline-none border-1 border-transparent focus:border-[#1A1F16] hover:border-[#1A1F16] focus:outline-none hover:outline-none transition-all duration-300 ease-in-out"
        type="text"
        value={searchTerm}
        placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
        onChange={handleInputChange}
      />
    </div>
  );
}
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired, // تابعی برای جستجو
};
export default SearchBar;
