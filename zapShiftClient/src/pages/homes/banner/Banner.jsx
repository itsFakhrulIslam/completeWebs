import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { LuArrowUpRight } from "react-icons/lu";
import "../../../index.css";

// image imported
import heroImage1 from "../../../assets/banner/banner1.png";
import heroImage2 from "../../../assets/banner/banner2.png";
import heroImage3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  const buttons = (
    <>
      <div className="absolute top-4/5 left-1/12 flex gap-4 ">
        <button className="btn capitalize bg-primary btn-outline text-xl hover:bg-transparent rounded-2xl py-6">
          track your parcel
        </button>
        <button className="btn bg-primary btn-outline py-6 rounded-2xl">
          <LuArrowUpRight />
        </button>
        <button className="btn capitalize rounded-2xl text-xl hover:bg-primary btn-outline py-6">
          be a rider
        </button>
      </div>
    </>
  );

  return (
    <Carousel
    // autoPlay={true}
    // infiniteLoop={true}
    >
      <div className="relative">
        <img src={heroImage1} />
        {buttons}
      </div>

      <div>
        <img src={heroImage2} />
        {buttons}
      </div>
      <div>
        <img src={heroImage3} />
        {buttons}
      </div>
    </Carousel>
  );
};

export default Banner;
