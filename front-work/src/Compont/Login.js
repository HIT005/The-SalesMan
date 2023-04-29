import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const acces = localStorage.getItem("user");
    if (acces) {
      navigate("/");
    }
  }, []);

  const handleLogin = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
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
    <div>
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

      
      <button type="button" className="A-Btn2" onClick={handleLogin}>
        {" "}
        LogIn{" "}
      </button>
    </div>
  );
};

export default LogIn;
