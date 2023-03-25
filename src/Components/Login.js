import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  //for getting value that what user put we have to use hook!!
  const [inpval, setinp] = useState({
    email: "",
    password: "",
  });

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
            <NavLink to="/overview"><button type="submit" id="btn" >
              {" "}Login
              </button> </NavLink>
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
