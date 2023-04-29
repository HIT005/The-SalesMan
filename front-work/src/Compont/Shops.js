import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Shop = () => {
  const [name, setName] = useState("");
  const [shopno, setShopno] = useState("");
  const [ownername, setOwnername] = useState("");
  const [shops, setShops] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getshoporder();
  }, []);
  const addorder = () => {
    navigate("/add");
  };

  const getshoporder = async () => {
    let result = await fetch("http://localhost:5000/create");
    result = await result.json();
    setShops(result);
  };

  const AddShop = async () => {
    let result = await fetch("http://localhost:5000/create", {
      method: "post",
      body: JSON.stringify({ name, shopno, ownername }),
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
  };
  return (
    <div className="shop-ui">
      <h3>welcome to shops</h3>
      <input
        type="text"
        placeholder="Create your shop name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="create your shop no"
        value={shopno}
        onChange={(e) => setShopno(e.target.value)}
      />
      <input
        type="text"
        placeholder="owner name"
        value={ownername}
        onChange={(e) => setOwnername(e.target.value)}
      />
      <button onClick={AddShop}>ADD Shop</button>
      {shops.length > 0 ? (
        shops.map((item, index) => (
          <ul key={item._id}>
            <li>S.No:{index + 1}</li>
            <li>SHOP:{item.name}</li>
            <li>ShopNo:{item.shopno}</li>
            <li>Owner:{item.ownername}</li>
            <li>
              <button onClick={addorder}>Add Order</button>
              <Link to={"/add"}></Link>
            </li>
          </ul>
        ))
      ) : (
        <h3>No shops found</h3>
      )}
    </div>
  );
};
export default Shop;
