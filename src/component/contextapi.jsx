import { useContext, useState, createContext } from "react";
import PropTypes from "prop-types";

const SomeContext = createContext();

function ContextApi({ children }) {
  const [amount, setAmount] = useState([]);
  const [newItem, setnewItem] = useState([]);
  const [newItemCart, setnewItemCart] = useState([]);
  return (
    <SomeContext.Provider
      value={{
        amount,
        setAmount,
        newItem,
        setnewItem,
        newItemCart,
        setnewItemCart,
      }}
    >
      {children}
    </SomeContext.Provider>
  );
}

ContextApi.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useContextApi() {
  const context = useContext(SomeContext);
  if (!context) {
    throw new Error("useContextApi must be used within a ContextApi");
  }
  return context;
}

export default ContextApi;
