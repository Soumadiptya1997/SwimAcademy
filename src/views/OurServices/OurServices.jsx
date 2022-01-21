import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OurServices.css";

// components
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopSection from "../../components/topSection/TopSection";
import Explore from "../../components/ourServices/explore/Explore";
import Description from "../../components/ourServices/description/Description";
import Choose from "../../components/ourServices/choose/Choose";

function OurServices() {
  return (
    <div>
      <TopSection image="images/bg/heading_02.jpg" pageName="Our Services">
        <Header />
      </TopSection>
      <Explore />
      <Description />
      <Choose />
      <Footer />
    </div>
  );
}

export default OurServices;
