import PropTypes from "prop-types";
function HeroTitle({ name }) {
  return <p className="text-2xl font-semibold text-[#1A1F16]">{name}</p>;
}
HeroTitle.propTypes = {
  name: PropTypes.string,
};

export default HeroTitle;
