/* eslint-disable react/prop-types */

import Image1 from"../assets/hero/women.png";
import Image2 from"../assets/hero/shopping.png";
import Image3 from"../assets/hero/sale.png";
import Image4 from"../assets/shirt/woman-in-cart.png";
import Image5 from"../assets/shirt/product-13.png";
import Image6 from"../assets/shirt/product-2.png";
import Image7 from"../assets/shirt/product-9.png";
import Image8 from"../assets/shirt/product-1.png";
import Image9 from"../assets/shirt/product-6.png";

import Slider from "react-slick";

const ImageList = [
  {
    id: 51,
    img: Image4,
    title: "Upto 50% off on all Men's Wear",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 41,
    img: Image5,
    title: "Upto 20% off on all Men's Wear",
    description:
      "Experience the perfect blend of elegance and performance with the Apple MacBook in Space Gray. Designed for professionals and creatives, this ultra-thin laptop offers a stunning Retina display, powerful performance, and long battery life. With its premium aluminum body and seamless macOS integration, it's the ideal device for productivity and entertainment.",
  },
  {
    id: 13,
    img: Image6,
    title: "Upto 10% off on all Men's Wear",
    description:
      "Make a statement with this stunning blue satin dress, crafted for elegance and sophistication. Its vintage-inspired design features a fitted bodice, a flowing A-line skirt, and delicate draping for a flattering silhouette",
  },
  {
    id: 21,
    img: Image7,
    title: "Upto 17.5% off on all Men's Wear",
    description:
      "This image showcases a sleek and modern digital product, reflecting cutting-edge technology and high quality. The product features clean lines and balanced colors, making it suitable for various creative applications.ز",
  },
  {
    id: 41,
    img: Image8,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Stay cozy and stylish with this classic red hoodie, designed for comfort and versatility. Made from high-quality fabric, it offers warmth and durability, perfect for casual outings, workouts, or lounging at home. Featuring a front pocket and adjustable drawstrings",
  },
  {
    id: 11,
    img: Image9,
    title: "Upto 5% off on all Men's Wear",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
