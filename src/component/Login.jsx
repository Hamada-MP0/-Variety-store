/* eslint-disable react/prop-types */
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { TbPasswordUser } from "react-icons/tb";
const clientId = "YOUR_GOOGLE_CLIENT_ID"; // ضع الـ Client ID من Google Cloud Console




const Login = ({ loginPopup, setlogiPopup }) => {
 
  return (
    <>
      {loginPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 shadow-md bg-white dark:bg-gray-900 rounded-lg duration-200  md:w-[350px]  w-[300px] lg:w-[500px]">
              {/* header */}
              <div data-aos="fade-right" className="flex items-center justify-between w-full ">
               <h1  className="text-2xl font-bold">Welcome</h1>
                <div>
                  <IoCloseOutline
                    className="text-3xl rounded-lg font-bold cursor-pointer duration-300 transition-all hover:rounded-lg hover:text-red-600 hover:border-4 hover:border-red-500"
                    onClick={() => setlogiPopup(false)}
                  />
                </div>
              </div>
              {/* form section */}
              <div className="mt-4 gap-5 grid ">
                <input
                data-aos="fade-left"
                  type="text"
                  placeholder="Username or Email"
                  className=" w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <FaUser  data-aos="fade-right" className="absolute right-14 top-[95px] focus:text-yellow-600"/>
                <input 
                data-aos="fade-right"
                  type="email"
                  placeholder="Password"
                  className=" w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <TbPasswordUser   data-aos="fade-right" className="absolute right-14 top-[165px] focus:text-yellow-600"/>
                
                <div data-aos="fade-left" className="grid justify-center items-start">
                <GoogleOAuthProvider clientId={clientId}>
                  <button   onClick={() => setlogiPopup(false)}
                  data-aos="fade-right"
                  className=" mt-17  mb-10  bg-gradient-to-r from-primary to-secondary hover:scale-150 duration-200 text-white py-1 px-4 rounded-full ">
                    Login
                

                  </button>
                  <GoogleLogin 
          onSuccess={(response) => console.log("Login Success:", response)}
          onError={() => console.log("Login Failed")}
        />
                  </GoogleOAuthProvider>
                </div>
                <div data-aos="flip-down" className="flex justify-center mt-4">
                  <p className="text-xs text-gray-400">
                  Don&apos;t have an account ?{" "}
                    <span className="text-primary cursor-pointer">
                      Sign Up
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
