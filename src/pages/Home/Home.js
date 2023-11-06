import React, { Fragment, useEffect, useState } from "react";
import "./Home.css";
import Header from "../Dashboard/Header/Header";
import HeroSection from ".././Dashboard/Hero/HeroSection";
import Medical from ".././Deliveries/Medical/MedicalSection";
import Digital from ".././Deliveries/Digital/Digital";
import Slider from "../../components/Slider/Slider";
import Linking from "../../components/Linking/Linking";
import Information3 from "../../components/Information3/Information3";
import Info from "../../components/Info/Info";
import Care from "../../components/Care/Care";
import People from "../../components/People/People";
import Questions from "../../components/Questions/Questions";
import Footer from "../../components/Footer/Footer";
import { ThreeDots } from "react-loader-spinner";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 3-second loading time using setTimeout
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Fragment>
      {loading ? (
        <div className="loading">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : (
        <>
          <div>
            <div className="header-section">
              <Header />
            </div>
            <div>
              <HeroSection />
            </div>
            <div>
              <Medical />
            </div>
            <div>
              <Digital />
            </div>
            <div>
              <Slider />
            </div>
            <div>
              <Linking />
            </div>
            <div>
              <Info />
            </div>
            <div>
              <Information3 />
            </div>
            <div>
              <Care />
            </div>
            <div>
              <People />
            </div>
            <div>
              <Questions />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </>
      )}
    </Fragment>
  );
};

export default Home;
