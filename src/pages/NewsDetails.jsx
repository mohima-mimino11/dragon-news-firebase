import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-components/RightNav";


const NewsDetails = () => {
  const data = useLoaderData();
  const newsDetail = data.data[0];
  // console.log(newsDetail);
  
  return (
    <div className="font-Poppins">
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <div className="card bg-base-100  shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={newsDetail.image_url}
                  alt="Shoes"
                  className="rounded-xl" />
              </figure>
              <div className="card-body ">
                <h2 className="card-title text-2xl font-bold">{newsDetail.title}</h2>
                <p className="text-base text-[#706F6F]">{newsDetail.details}</p>
                <div className="card-actions">
                  <Link to={`/category/${newsDetail.category_id}`} className="btn bg-[#D72050] text-white text-xl font-medium">All news in this category</Link>
                </div>
              </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;