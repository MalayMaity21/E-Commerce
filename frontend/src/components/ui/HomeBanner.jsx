import homeBanner from "../../assets/home-banner.png";
import Container from "./Container";
import LinkButton from "./LinkButton";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { HomeCarouselData } from "../../Data/HomeCarousel.js";
const HomeBanner = () => {
  const items = HomeCarouselData.map((items) => (
    <img
      src={items.image}
      alt=""
      className="cursor-pointer mouseTracking  w-full h-full object-cover rounded-md"
    />
  ));
  return (
    <Container className="relative py-5 overflow-hidden ">
      <div className="relative">
        <AliceCarousel
          items={items}
          controlsStrategy="alternate"
          autoPlay
          autoPlayInterval={1500}
          infinite
          disableButtonsControls
          animationType="slide"
        />
      </div>
    </Container>
  );
};

export default HomeBanner;
