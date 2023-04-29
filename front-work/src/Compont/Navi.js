import React, { useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom";




const Navig = () => {
  const navigate = useNavigate()
  const acces = localStorage.getItem("user");
  const Logout = ()=>{
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <div>
   { acces ? <ul className="Snavi-ui">
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/create">Shops</Link></li>
        <li><Link to = "/add">Order</Link></li>
        <li><Link to = "/profile">Profile</Link></li>
        <li> <Link onClick={Logout} to = "/signup">Logout({JSON.parse(acces).name})</Link></li>
      </ul>
      :
      <ul className="SLnavi-ui">
      
        <Link to = "/signup">SignUp</Link>
        <Link to = "/login">LogIn</Link>
        
      </ul>

  }
  </div>
    
  );
};
export default Navig;
