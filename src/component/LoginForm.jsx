import { useForm } from "react-hook-form";
import HeroTitle from "./HeroTitle";
import { GoPerson } from "react-icons/go";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContextApi } from "./contextapi";
import { useNavigate } from "react-router-dom";
function LoginForm() {
  const { register, handleSubmit, reset } = useForm();
  const { setAmount } = useContextApi();
  const nav = useNavigate();

  function onSubmit(data) {
    setAmount((prevAmount) => [...prevAmount, data]);
    toast.success("Form submitted successfully!!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    reset();
    nav("/app/shop");
  }
  return (
    <section className="flex justify-center items-center ">
      <ToastContainer />
      <form
        className="flex flex-col bg-white p-8 rounded-3xl shadow-lg w-96 space-y-4 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-center items-center p-1">
          <HeroTitle name="Login" />
        </div>
        <input
          type="text"
          className="bg-stone-100 p-4 rounded-2xl w-full font-semibold outline-none border-2 border-transparent focus:border-[#1A1F16] transition-all"
          placeholder="Name"
          {...register("Name", { required: true })}
        />

        <input
          type="text"
          className="bg-stone-100 p-4 rounded-2xl w-full font-semibold outline-none border-2 border-transparent focus:border-[#1A1F16] transition-all"
          placeholder="LastName"
          {...register("LastName", { required: true })}
        />
        <input
          type="email"
          className="bg-stone-100 p-4 rounded-2xl w-full font-semibold outline-none border-2 border-transparent focus:border-[#1A1F16] transition-all"
          placeholder="Email"
          id="email"
          name="email"
          defaultValue="email@gmail.com"
          {...register("Email", { required: true })}
        />
        <input
          type="password"
          className="bg-stone-100 p-4 rounded-2xl w-full font-semibold outline-none border-2 border-transparent focus:border-[#1A1F16] transition-all"
          placeholder="Password"
          {...register("Password", { required: true })}
        />
        <button
          type="submit"
          className="bg-[#1A1F16] text-white p-4 rounded-2xl w-full font-semibold hover:bg-[#272f22] hover:cursor-pointer transition-all flex justify-center items-center"
        >
          <span className="flex justify-center items-center">
            <GoPerson className="text-2xl mr-1" />
            <span className="font-semibold">Submit</span>
          </span>
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
