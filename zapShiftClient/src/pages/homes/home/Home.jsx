import Banner from "../banner/Banner";
import OurServices from "../ourServices/OurServices";
import WorkSteps from "../workSteps/WorkSteps";

const Home = () => {
  return (
    <div className="space-y-10">
      <Banner />

      <WorkSteps />

      <OurServices />
    </div>
  );
};

export default Home;
