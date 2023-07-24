import React from "react";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Chat App</span>
          <span className="title">Login</span>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            {err && <span>Something went wrong</span>}
            <button>Sign In</button>
          </form>
          <p>
            You don't have an account? <Link to="/signup">Register</Link>
          </p>
        </div>
        <div className="info">
          <h5>To Test : Credentials are below</h5>
          <p>vasu@gmail.com/123456</p>
          <p>priyansh@gmail.com/098765</p>
        </div>
      </div>
    </>
  );
};

export default Login;
