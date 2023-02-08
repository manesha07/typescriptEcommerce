import {Navbar} from "./Navbar"
import {Footer} from "./Footer"
import Products from "./Products"
import Hero from "./Hero"
import HeroPage from "./HeroPage"

export const Home = () => {
    return <>
        <div>
        <HeroPage/>
        <Hero/>
        <Products/>
        </div>
    </>
}

// import React, { useState, useEffect } from "react";
// import { Navbar } from "./Navbar";
// import { Footer } from "./Footer";
// import Products from "./Products";
// import Hero from "./Hero";

// export const Home = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((currentIndex + 1) % 4);
//     }, 3000);
//     return () => clearInterval(intervalId);
//   }, [currentIndex]);

//   const images = [
//     "https://picsum.photos/id/10/200/300",
//     "https://picsum.photos/id/100/200/300",
//     "https://picsum.photos/id/1000/200/300",
//     "https://picsum.photos/id/10000/200/300",
//   ];

//   return (
//     <>
//       <Navbar />
//       <div className="relative p-6 bg-gray-300">
//         <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
//           <div className="relative w-64 h-64">
//             <img
//               className="absolute top-0 left-0 w-full h-full object-cover"
//               src={images[currentIndex]}
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//       <div>
//         <Hero />
//         <Products />
//       </div>
//       <Footer />
//     </>
//   );
// };
