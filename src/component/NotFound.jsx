import { useNavigate } from "react-router-dom";

function NotFound() {
  const nav = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="mt-4 text-xl text-gray-700">Page Not Found</p>
        <p className="mt-2 text-gray-500">
          The page you're looking for doesn't exist.
        </p>

        <p
          onClick={() => nav("/app/shop")}
          className="mt-6 inline-block px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          {" "}
          Go back to Home
        </p>
      </div>
    </div>
  );
}

export default NotFound;
