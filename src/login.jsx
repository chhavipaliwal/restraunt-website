import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("Chhavi");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="flex flex- col items-center justify-center h-screen bg-gray-100 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-4 border border-gray-500 rounded-lg"
      >
        <h1 className="text-2xl font-bold text-center">Login Your ID</h1>
        <div className=" mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            name="email"
            className="border border-gray-400 p-2  rounded-lg"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            name="password"
            className="border border-gray-400 p-2 mb-6 rounded-lg"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-lg "
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
