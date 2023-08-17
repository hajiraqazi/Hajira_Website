import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../Assets/Service.jpg";
import Footer from "../components/Footer";
import MyService from "../components/MyService";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <MyService />
      <Footer />
    </>
  );
}

export default Service;
