import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    const acces = localStorage.getItem('user');
    if(acces){
        navigate('/')
    }
  },[])
  const handleSignUp = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:5000/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/");
  };

  return (
    <div className="Register">
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Enter Your Name"
        className="I-Box"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Your Email"
        className="I-Box"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Your Password"
        className="I-Box"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="button" className="A-Btn" onClick={handleSignUp}>
        {" "}
        SignUp{" "}
      </button>
    </div>
  );
};

export default SignUp;
