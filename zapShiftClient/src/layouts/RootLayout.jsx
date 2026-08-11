import { Outlet } from "react-router";
import Footer from "../pages/shared/footer/Footer";
import Navbar from "../pages/shared/navigation/Navbar";

const RootLayout = () => {
  return (
    <div>
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
