import brandLogo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <img src={brandLogo} alt="" />
      <p className="text-3xl font-bold -ms-2">ZapShift</p>
    </div>
  );
};

export default Logo;
