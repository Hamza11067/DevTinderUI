import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("captain@gmail.com");
  const [password, setPassword] = useState("Captain@123");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4000/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(res.data)
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="card bg-base-300 w-96 shadow-sm mx-auto my-4">
      <h1 className="text-2xl font-semibold text-center mt-4">Login Page</h1>
      <div className="card-body">
        <label className="input m-2">
          <span className="label">Email: </span>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>

        <label className="input m-2">
          <span className="label">Password: </span>
          <input
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
