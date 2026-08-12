import { Outlet } from "react-router";
import Footer from "../pages/shared/footer/Footer";
import Navbar from "../pages/shared/navigation/Navbar";

const RootLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* header / navigation area */}
      <Navbar />

      {/* dynamic area */}
      <Outlet />

      {/* footer area */}
      <Footer />
    </div>
  );
};

export default RootLayout;
