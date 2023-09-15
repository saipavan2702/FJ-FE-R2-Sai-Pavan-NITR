import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-auth")) {
      navigate("/");
    }
  });

  const isValid = async () => {
    const allUsers = await fetch("https://dummyjson.com/users").then((res) =>
      res.json()
    );

    let flag = false;
    allUsers.users.map((user) => {
      if (user.email === email && user.password === password) {
        flag = true;
        return;
      }
    });

    return flag;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid()) {
      localStorage.setItem(
        "user-auth",
        JSON.stringify({
          email: email,
          password: password,
        })
      );
      navigate("/");
    }
    toast.error("Invalid credentials");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Log me In</button>
        <br />
        <span>
          doesn&apos;t have an account?<Link to="/register">Register</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
