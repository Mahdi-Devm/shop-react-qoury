import PropTypes from "prop-types";
import { categories } from "../data/data";

function FilteCategory({
  category,
  setCategory,
  isCategoryChecked,
  setIsCategoryChecked,
}) {
  return (
    <>
      <div>
        <label className="block text-gray-800 text-lg font-medium mb-2">
          Category
        </label>
        <select
          className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#22281D] transition duration-300"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="categoryConfirm"
          checked={isCategoryChecked}
          onChange={() => setIsCategoryChecked(!isCategoryChecked)}
          className="mr-2 accent-stone-500/25"
        />
        <label htmlFor="categoryConfirm" className="text-gray-700 text-sm">
          Confirm category change
        </label>
      </div>
    </>
  );
}

FilteCategory.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
  isCategoryChecked: PropTypes.bool.isRequired,
  setIsCategoryChecked: PropTypes.func.isRequired,
};

export default FilteCategory;
