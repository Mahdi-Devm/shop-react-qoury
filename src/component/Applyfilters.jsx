import PropTypes from "prop-types";

function Applyfilters({ handleSubmit, name }) {
  return (
    <button
      onClick={handleSubmit}
      className="w-full py-3 bg-[#22281D] text-white rounded-md hover:bg-[#2A3B2F] focus:ring-2 focus:ring-[#22281D] transition-colors duration-300"
    >
      {name}
    </button>
  );
}

Applyfilters.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.func.toString,
};

export default Applyfilters;
