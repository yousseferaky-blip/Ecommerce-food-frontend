import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo(1).png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API, LOGOUT } from "./Api";
import { toast } from "react-toastify";
import axios from "axios";
import { logOut } from "../redux/user/User";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const users = useSelector((state)=>state.user)
  const productCart = useSelector((state)=> state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleLogOut = async ()=>{
    try{
      await axios.get(`${API}/${LOGOUT}`)
        toast("Logout successfully")
        dispatch(logOut());
        navigate("/signin")
    }catch(err){
    console.log(err)}
  }
  useEffect(()=>{
    handleLogOut()
  },[])

  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
    {/* desktop */}

    <div className="flex items-center h-full justify-between">
      <Link to={""}>
        <div className="h-10">
          <img src={logo} className="h-full" />
        </div>
      </Link>

      <div className="flex items-center gap-4 md:gap-7">
        <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
          <Link to={"/"}>Home</Link>
          <Link to={"/menu/65c506c471f975638340b341"}>Menu</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
          {users.role && users.role === "admin" && <Link to={"/create"}>Create</Link>}
        </nav>
        <div className="text-2xl text-slate-600 relative">
          <Link to={"/cart"}>
            <BsCartFill />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">
              {productCart.length}
            </div>
          </Link>
        </div>
        <div className=" text-slate-600" onClick={()=>setMenu(!menu)}>
          {
            users.avatar ?  
            <img src={`${API}/uploads/${users.avatar}`} className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md" />
            :
          <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
              <HiOutlineUserCircle />
          </div>
          }
          {menu && (
  <div className="flex flex-col absolute top-16 right-1 w-full bg-slate-200 items-start gap-5 p-5 text-lg z-50 shadow-2xl">
    {users.firstName ? (
      <h2 className="px-2 cursor-pointer" onClick={handleLogOut}>
        logOut
      </h2>
    ) : (
      <Link to={"/signin"} className="px-2">
        SignIn
      </Link>
    )}
    <nav className="text-base md:text-lg flex flex-col md:hidden">
      <Link to={""} className="px-2 py-1">
        Home
      </Link>
      <Link to={"/menu/65c506c471f975638340b341"} className="px-2 py-1">
        Menu
      </Link>
      <Link to={"/about"} className="px-2 py-1">
        About
      </Link>
      <Link to={"/contact"} className="px-2 py-1">
        Contact
      </Link>
    </nav>
  </div>
)}
        </div>
      </div>
    </div>

    {/* mobile */}
  </header>


  );
};

export default Header;
