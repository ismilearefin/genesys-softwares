import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Frame.png";
import { BiSearch, BiUser, BiLogOut } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { Authcontext } from "../Contextprovidor/Contextprovidor";

const Navbar = () => {
  const { user, handlelogout } = useContext(Authcontext);
  const [userInfo, setuserInfo] = useState([]);

  useEffect(() => {
    fetch(
      `https://genesys-softwares-server-ismilearefin.vercel.app/users/info?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setuserInfo(data));
  }, [user]);

  function handleLogOut() {
    handlelogout()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }
  console.log(userInfo);
  return (
    <div className="w-full h-[100px] border grid items-center px-[91px]">
      <div className="navbar bg-transparent">
        <div className="navbar-start lg:flex gap-6 text-sm leading-5">
          <ul className="flex gap-6  menu-horizontal px-1">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link>SHOP</Link>
            </li>
            <li>
              <Link>ABOUT US</Link>
            </li>
            <li>
              <Link>CONTACT US</Link>
            </li>
            {userInfo[0]?.role === "admin" && (
              <li>
                <Link to="/dashboard">DASHBOARD</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-center">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[52px]" />
          </Link>
        </div>
        <div className="navbar-end gap-[18px] text-xl">
          <p>
            <BiSearch></BiSearch>
          </p>
          <Link to="/signup">
            <BiUser></BiUser>
          </Link>
          <p>
            <BsCart></BsCart>
          </p>
          {user?.uid && <BiLogOut onClick={handleLogOut}></BiLogOut>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
