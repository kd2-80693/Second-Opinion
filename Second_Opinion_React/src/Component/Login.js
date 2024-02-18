import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //ye terms and policy ke liye h
  const navigate = useNavigate();
  // const navigate2=useNavigate();

  const [loginData, setLoginData] = useState({
    user: "",
    password: "",
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const Handlelogin = () => {
    console.log(loginData);
    axios
      .post("http://localhost:8080/login", loginData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(typeof response.data.status);
        if (response.data.status == false) {
          toast.error("Invalid User Details", {
            className: "toast-message",
          });
        } else {
        }
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  return (
    <>
      <div className="wrapper"></div>

      <div className="login-page">
        <h1>Log in</h1>
        <label>E-mail address</label>
        <input
          type="email"
          name="user"
          value={loginData.user}
          onChange={handleData}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleData}
        />
        <button onClick={Handlelogin} className="btn">
          LOGIN
        </button>
        <p className="account">
          No account? <span className="create-one">Create one!</span>
        </p>
        <a
          href="https://github.com/Vijaysharmagpj"
          target="_blank"
          className="go-back"
        >
          Go back
        </a>
        <div className="back-side">
          <p
            className="term"
            onClick={() => {
              navigate("/terms");
            }}
          >
            Terms of use
          </p>
          <p className="privacy">Privacy Policy</p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Login;
