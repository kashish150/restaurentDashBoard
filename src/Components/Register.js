import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Register = () => {
  //for getting value that what user put we have to use hook!!

  const [inpval, setinp] = useState({
    name: "",
    contact: "",
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
          <h2 id="signup"> Sign up </h2>
          <form>
            <input
              className="input"
              type="text"
              onChange={setData}
              value={inpval.name}
              placeholder="Username"
              name="name"
              required
            /><br></br>
            <input
              className="input"
              type="number"
              onChange={setData}
              value={inpval.contact}
              placeholder="Contact"
              name="contact"
              required
            /><br></br>
            <input
              className="input"
              type="email"
              onChange={setData}
              value={inpval.email}
              placeholder="e-mail"
              name="email"
              required
            /><br></br>
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
            <NavLink to = "/overview">
            <button type="submit" id="btn">
              {" "}
                Register{" "}
            </button>
            </NavLink>
            <p>
              Already have an account?{" "}
              <a id="login_link" href="/login">
                Login
              </a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};
export default Register;