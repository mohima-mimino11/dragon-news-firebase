import React, { useEffect, useState } from 'react';

const LeftNavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() =>{
    fetch("https://openapi.programming-hero.com/api/news/categories")
    .then(res => res.json())
    .then(data => setCategories(data.data.news_category))
  },[])
  console.log(categories);
  
  return (
    <div>
      <h3 className="text-xl font-semibold mb-3">All Category({categories.length})</h3>
      <div className='flex flex-col gap-2'>
        {
          categories.map(category =><button className='btn' key={category.category_id}>{category.category_name}</button>
          )
        }
      </div>
    </div>
  );
};

export default LeftNavBar;