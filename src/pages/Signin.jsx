import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";
const Signin = () => {
  const navigate =useNavigate()
  const [inpVal, setInpVal] = useState({
    email:"",
    password:"",
   })
  //  const [data, setData] = useState([]);
   const getData = (e) => {
     const {value,name} = e.target;
 
     setInpVal(() => {
       return {
         ...inpVal,
         [name]:value
       }
     })
 
   }
 
 
   const addData = (e) => {
     e.preventDefault();
     const getUser = localStorage.getItem("user")
 
     const {email,password} = inpVal;
   
      if(email === ""){
        toast.error("email field is required")
     }else if(!email.includes("@")){
       alert("please valid email address");
     }else if(password === ""){
       alert("password field is required");
     }else if(password.length < 5){
       alert("password must be 5 digits");
     }else{
 
       if(getUser && getUser.length){
        const userData = JSON.parse(getUser);
        const userLogin = userData.filter((elm) => {
          return elm.email === email && elm.password === password;
        } )
        if(userLogin.length === 0){
          alert("invalid details")
        }else{
          toast.success("user login successfully")
          localStorage.setItem("user", JSON.stringify(userLogin))
          navigate("/")
        }
       }
     }
   }
  return (
    <React.Fragment>
    <div className="flex mt-20 min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
        </h2>
      </div>

      <div className="mt-10 w-[50vw] sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={getData}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
             
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={getData}
              />
            </div>
          </div>


          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={addData}
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="mt-10 text-center text-sm text-gray-500">
        Don't have an account?{" "}
          <Link to="/signup">
          <p
            
            className="font-semibold leading-6 inline-block text-indigo-600 hover:text-indigo-500"
          >
            Sign Up
          </p>
          </Link>
        </div>
      </div>
    </div>
  </React.Fragment>
  )
}

export default Signin