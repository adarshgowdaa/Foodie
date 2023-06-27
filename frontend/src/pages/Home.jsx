import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <div className="m-5">
        <Card />
        <Card />

        <Card />

      </div>
      <Footer />
    </div>
  );
}

export default Home;
