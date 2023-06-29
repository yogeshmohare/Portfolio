import React from "react";
import Social from "./Social";
import Data from "./Data";
import Myimage from "../assets/Myimage.jpg";
import About from "./About";
const Home = () => {
  return (
    <section className=" mt-20 mb-14 px-3">
      <div className="home_container bg-white">
        <div className="home_conten grid t grid-cols-1 md:grid-cols-6 gap-1 items-center pt-3">
          <div className="col-span-6">
            <Social />
          </div>
          <div className=" col-span-6 md:col-span-3">
            <Data />
          </div>
          <div className="home_image col-span-1 md:col-span-2">
            <img
              src={Myimage}
              alt=""
              className="bg-no-repeat bg-center bg-cover w-72 md:w-60 h-60 rounded-t-lg  md:rounded-t-full rounded-b-xl md:rounded-b-full ml-2"
            />
          </div>
          <div className="about col-span-6">
            <About />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
