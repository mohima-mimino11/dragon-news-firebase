import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-2">
      <div className="logo">
        <img className="w-[300px]" src={logo} alt="" />
      </div>
      <h3 className="text-lg text-[#706F6F]">Journalism Without Fear or Favour</h3>
      <p className="text-xl font-medium">{moment().format('dddd, MMMM Do YYYY')}</p>
    </div>
  );
};

export default Header;