import { useState } from "react";
import login from "../assets/login-animation.gif";
import {BiShow, BiHide} from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { API, SIGNIN } from "../components/Api";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/user/User";

const SignIn = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [data,setData] = useState({
    email:"",
    password:"",
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e)=>{
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const {password,email} = data

    if(  password  && email ){
        const res = await axios.post(`${API}/${SIGNIN}`, { email, password })
        dispatch(signIn({ data: res.data.info }))
        navigate("/")
        toast.success("Successfully")
    }else{
      toast.error("Please Enter required fields")
    }

  }
  return (
    <div className="p-3 md:p-4 ">
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4 rounded-sm">
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto ">
          <img className="w-full h-full" src={login} />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col w-full py-3">
          <label htmlFor="email">Email</label>
          <input
            className="w-full bg-slate-200 py-1 px-2 mt-1 mb-2 outline-none border-none rounded-sm"
            type="email"
            id="email"
            onChange={handleChange}
            name="email"
            value={data.email}
          />

          <div className="relative">
            <label htmlFor="password">Password</label>
            <input
              className="w-full bg-slate-200 py-1 px-2 mt-1 mb-2 outline-none border-none rounded-sm"
              type={showPassword ? "text" :"password"}
              id="password"
              onChange={handleChange}
              name="password"
              value={data.password}
              minLength={6}
            />
            <span onClick={()=>setShowPassword(!showPassword)} className="absolute top-1/2 right-2 text-lg cursor-pointer">
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
        <button className="bg-red-400 hover:bg-red-500 p-1 rounded-lg text-white font-bold">Sign In </button>

        </form>
        <p className="text-sm ">Don't have account ? <Link className="text-red-400 px-1" to='/signup'>SignUp</Link></p>
      </div>
    </div>
  )
}

export default SignIn