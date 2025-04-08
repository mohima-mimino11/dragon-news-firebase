import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
  return (
    <div className="flex gap-2 bg-[#F3F3F3] p-4">
      <p className="text-xl font-medium bg-[#D72050] text-white py-2 px-5">Latest</p>
      <Marquee>
        <Link to="/news">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, quae!</Link>
        <Link to="/news">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, quae!</Link>
        <Link to="/news">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, quae!</Link>

      </Marquee>
    </div>
  );
};

export default LatestNews;