import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  //for getting value that what user put we have to use hook!!
  const navigate = useNavigate();

  const [inpval, setinp] = useState({
    email: "",
    password: "",
  });
  function handleLogin() {
    axios
      .post("http://localhost:3000/api/restaurent/login", {
        username: "f11212erewfwefew@gmail.com",
        email: "werdffdwefw@gmail.com",
        password: "ererrer",
        restuarentName: "kashish babbar",
        phoneNumber: "8950010348",
      })
      .then((res) => {
        Cookies.set("token", JSON.stringify(res.data.token));
        console.log(res.data);
        navigate("/overview");
      });
  }

  const setData = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setinp((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  return (
    <>
      <section>
        <div className="container">
          <b>
            {" "}
            <h1 id="signin">
              {" "}
              <center> Login </center>{" "}
            </h1>{" "}
          </b>
          <form>
            <input
              className="input"
              type="email"
              onChange={setData}
              value={inpval.name}
              placeholder="Email"
              name="email"
              required
            />
            <br />{" "}
            <input
              className="input"
              type="password"
              onChange={setData}
              value={inpval.password}
              placeholder="Password"
              name="password"
              required
            />
            <br />{" "}
            <button
              id="btn"
              onClick={() => {
                handleLogin();
              }}
            >
              Login
            </button>
            <p>
              Don't have an account ?{" "}
              <a href="/register" id="register_link">
                Create an account
              </a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};
export default Login;

//container,signin,register_link,input,btn
