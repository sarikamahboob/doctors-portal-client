import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import Info from "../Info/Info";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Service/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto px-12">
        <Info />
        <Services />
      </div>
      <MakeAppointment />
      <div className=" max-w-7xl mx-auto px-12">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
