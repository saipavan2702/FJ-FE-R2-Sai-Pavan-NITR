import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const isValid = async () => {
    const allUsers = await fetch("https://dummyjson.com/users").then((res) =>
      res.json()
    );

    allUsers.users.map((user) => {
      if (user.email === email) {
        toast.error("Email already exists");
        return false;
      }
      if (user.username === userName) {
        toast.error("Username already exists");
        return false;
      }
    });

    return true;
  };

  const handleSubmit = async () => {
    if (isValid()) {
      const res = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userName,
          email: email,
          password: password,
        }),
      }).then((response) => response.json());
      delete res.username;
      localStorage.setItem("user-auth", JSON.stringify(res));
      navigate("/");
    }
    setEmail("");
    setPassword("");
    setUserName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          onChange={(event) => setUserName(event.target.value)}
        />

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
        <button type="submit">Sign me up</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
