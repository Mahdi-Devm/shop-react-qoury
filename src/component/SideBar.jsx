import Logo from "../../public/Group.png";
import { CiLogin } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { CiUser } from "react-icons/ci";
function SideBar() {
  const nav = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(null);

  const handleActive = (iconName) => {
    setActive(iconName);
  };

  useEffect(() => {
    if (location.pathname.includes("shop")) {
      setActive("shop");
    } else if (location.pathname.includes("cart")) {
      setActive("cart");
    } else if (location.pathname.includes("login")) {
      setActive("login");
    } else if (location.pathname.includes("usertable")) {
      setActive("usertable");
    }
  }, [location.pathname]);

  return (
    <div className="h-screen w-17 bg-[#ffff] m-2 rounded-3xl flex flex-col items-center gap-y-5">
      <img
        onClick={() => nav("shop")}
        className="mt-2 cursor-pointer"
        src={Logo}
        alt="Logo"
      />

      <div
        onClick={() => {
          nav("shop");
          handleActive("shop");
        }}
        className={`p-2 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out transform ${
          active === "shop"
            ? "bg-[#1A1F16] text-white"
            : "hover:bg-[#f5f5f5] hover:text-[#1A1F16]"
        }`}
      >
        <CiShop className="text-3xl" />
      </div>

      <div
        onClick={() => {
          nav("cart");
          handleActive("cart");
        }}
        className={`p-2 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out transform ${
          active === "cart"
            ? "bg-[#1A1F16] text-white"
            : "hover:bg-[#f5f5f5] hover:text-[#1A1F16]"
        }`}
      >
        <CiShoppingCart className="text-3xl" />
      </div>

      <div
        onClick={() => {
          nav("/login");
          handleActive("login");
        }}
        className={`p-2 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out transform ${
          active === "login"
            ? "bg-[#1A1F16] text-white"
            : "hover:bg-[#f5f5f5] hover:text-[#1f1616]"
        }`}
      >
        <CiLogin className="text-3xl" />
      </div>
      <div
        onClick={() => {
          nav("usertable");
          handleActive("usertable");
        }}
        className={`mt-110 p-2 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out transform ${
          active === "usertable"
            ? "bg-[#1A1F16] text-white"
            : "hover:bg-[#f5f5f5] hover:text-[#1f1616]"
        }`}
      >
        <CiUser className="text-3xl" />
      </div>
    </div>
  );
}

export default SideBar;
