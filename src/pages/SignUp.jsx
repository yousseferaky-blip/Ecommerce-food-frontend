import { useState } from "react";
import login from "../assets/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { API, SIGNUP } from "../components/Api";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/user/User";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleImageChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, password, confirmPassword, email, lastName, avatar } =
      data;

    if (firstName && password && confirmPassword && email) {
      if (password === confirmPassword) {
        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("confirmPassword", confirmPassword);
        formData.append("avatar", avatar);

        try {
          const res = await axios.post(`${API}/${SIGNUP}`, formData);

          if (res.status === 200) {
            toast.success("Successfully");
            navigate("/signin");
          }
        } catch (error) {
          toast.error("Email already exists");
        }
      } else {
        toast.error("Password Not Match ");
      }
    } else {
      toast.error("Field Are Required");
    }
  };
  return (
    <div className="p-3 md:p-4 ">
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4 rounded-sm">
        <div className="w-20 h-20 relative overflow-hidden rounded-full drop-shadow-md shadow-md m-auto ">
          <img className="w-full h-full" src={login} />

          <label htmlFor="profileImage">
            <div className="absolute bottom-0 bg-slate-700 w-full h-1/3 text-center font-bold bg-opacity-50 cursor-pointer">
              <p className="text-sm text-white">Upload</p>
            </div>
            <input
              className="hidden "
              type="file"
              id="profileImage"
              onChange={handleImageChange}
              name="avatar"
            />
          </label>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col w-full py-3">
          <label htmlFor="firstName">First Name</label>
          <input
            className="w-full bg-slate-200 py-1 px-2 mt-1 mb-2 outline-none border-none rounded-sm"
            type="text"
            id="firstName"
            onChange={handleChange}
            name="firstName"
            value={data.firstName}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            className="w-full bg-slate-200 py-1 px-2 mt-1 mb-2 outline-none border-none rounded-sm"
            type="text"
            id="lastName"
            onChange={handleChange}
            name="lastName"
            value={data.lastName}
          />

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
              type={showPassword ? "text" : "password"}
              id="password"
              onChange={handleChange}
              name="password"
              value={data.password}
              minLength={6}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-2 text-lg cursor-pointer"
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <div className="relative">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="w-full bg-slate-200 py-1 px-2 mt-1 mb-2 outline-none border-none rounded-sm"
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              onChange={handleChange}
              name="confirmPassword"
              value={data.confirmPassword}
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute top-1/2 right-2 text-lg cursor-pointer"
            >
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="bg-red-400 hover:bg-red-500 p-1 rounded-lg text-white font-bold">
            Sign Up{" "}
          </button>
        </form>
        <p className="text-sm ">
          Already have account ?
          <Link className="text-red-400 px-1" to="/signin">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
