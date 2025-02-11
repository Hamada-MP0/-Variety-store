import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Products from "./component/Products";
import Popup from "./component/Popup";

import TopProducts from "./component/TopProducts";
import Banner from "./component/Banner";
import Subscribe from "./component/Subscribe";
import Testimonials from "./component/Testimonials";
import Footer from "./component/Footer";
import Login from "./component/Login";
import Sign  from "./component/Sign";
import AOS from "aos";
import './assets/style.css'
import "aos/dist/aos.css";
const App = () => {
  const [loginPopup, setlogiPopup] = React.useState(false);
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [signPopup, setSignPopup] = React.useState(false);
  const handleOrderPopup = () => {
   
    setOrderPopup(!orderPopup);
  };
  const handleLoginPopup = () => {
    setlogiPopup(!loginPopup);
  };
  const handleSignPopup = () => {
    setSignPopup(!signPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1100,
      easing: "ease-in-sine",
      delay: 300,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      
<Navbar handleOrderPopup={handleOrderPopup} handleLoginPopup={handleLoginPopup} handleSignPopup={handleSignPopup}/>

<Hero handleOrderPopup={handleOrderPopup}/>
<Products/>
<TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      <Login loginPopup={loginPopup} setlogiPopup={setlogiPopup}/>
      <Sign signPopup={signPopup} setSignPopup={setSignPopup}/>
    </div>
  )
}

export default App;