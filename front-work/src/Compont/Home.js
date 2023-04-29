import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getitem();
  }, []);
  const shops = () => {
    navigate("/create");
  };
  const getitem = async () => {
    let result = await fetch("http://localhost:5000");
    result = await result.json();
    setProducts(result);
    // console.warn("products", products);
  };
  const handlehome = async () => {
    let result = await fetch("http://localhost:5000", {
      method: "post",
      body: JSON.stringify({ name, city }),
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
  };
  return (
    <div className="home-ui">
      <h3>Create your Marketing Area</h3>
      <input
        type="text"
        placeholder="Create your area"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="button" onClick={handlehome}>
        Create
      </button>
      {products.length > 0 ? (
        products.map((item, index) => (
          <ul key={item._id}>
            <li>S.NO:{index + 1}</li>
            <li>Area:{item.name}</li>
            <li>City:{item.city}</li>
            <li>
              <button onClick={shops}>GO ON SHOPS</button>
              <Link to={"add/"}></Link>
            </li>
          </ul>
        ))
      ) : (
        <h1> no result found</h1>
      )}
    </div>
  );
};
export default Home;
