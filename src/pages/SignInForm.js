import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticate, signin } from "../helper/Auth";
import { toast } from "react-toastify";
import logo from "../assets/WhatsApp Image 2024-02-16 at 18.12.23.jpeg";

const SignInForm = ({}) => {
  // const [emailAddress, setEmailAddress] = useState("");
  // const [password, setPassword] = useState("");
  // const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    emailAddress: "",
    password: "",
    rememberMe: true, // Assuming default checked state
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    await signin({ formData }).then((payload) => {
      console.log(payload);
      if (payload.success == true) {
        return authenticate(payload, () => {
          setFormData((prevValues) => ({ emailAddress: "", Password: "" }));
          return navigate("/");
        });
      } else {
        toast.error(payload?.error);
        console.log("cross");
      }
    });
  };

  // async function handleSignIn() {
  //   const OnlineServer = process.env.REACT_APP_SERVER_BACKEND;

  //   console.log(formData);
  //   let result = await fetch(`${OnlineServer}/user/login`, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   });
  //   result = await result.json();
  //   localStorage.setItem("User-Info", JSON.stringify(result));
  //   // history.push("/");
  //   return navigate("/");
  // }
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[#172B4D]">
      <form
        onSubmit={handleSignIn}
        className="bg-white p-8 shadow-md rounded-md w-96"
      >
        <div className="w-full flex flex-col justify-center items-center ">
          <img className="w-[90px] rounded-full m-auto" src={logo} />
          <h2 className="text-2xl font-semibold mb-4">SIGN IN</h2>
        </div>

        <div className="mb-4">
          <label
            htmlFor="emailAddress"
            className="block text-gray-600 text-sm font-medium"
          >
            EmailAddress
          </label>
          <input
            type="email"
            name="emailAddress"
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="name"
            value={formData.emailAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-600 text-sm font-medium"
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="********"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="rememberMe" className="flex items-center">
            <input
              type="checkbox"
              name="rememberMe"
              className="mr-2"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <span className="text-sm text-gray-600">Remember me</span>
          </label>
        </div>

        <div className="mb-4 ">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgot your password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          // onClick={handleSignIn}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};
export default SignInForm;
