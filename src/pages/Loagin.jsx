import LoginForm from "../component/LoginForm";

function Login() {
  return (
    <section className="flex justify-center items-center w-full h-screen bg-opacity-50 backdrop-blur-lg">
      <main className="relative z-11">
        <LoginForm />
      </main>
    </section>
  );
}

export default Login;
