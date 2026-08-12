import brandLogo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex justify-center items-end">
      <img src={brandLogo} alt="" />
      <p className="text-3xl font-bold -ms-3">zapShift</p>
    </div>
  );
};

export default Logo;
