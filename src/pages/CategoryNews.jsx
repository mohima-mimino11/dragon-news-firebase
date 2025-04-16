import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const CategoryNews = () => {
  const {data:news} = useLoaderData();
  console.log(news);
  
  return (
    <div className="mx-5">
      <h2 className="text-xl font-semibold mb-3">Dragon News Home</h2>
      <p className="text-sm text-gray-400"> {news.length} found in this category</p>
      <div className="space-y-8">
        {
          news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;