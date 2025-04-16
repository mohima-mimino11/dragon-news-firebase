import React, { useEffect, useState } from 'react';
import kid from "../../assets/kid.png";
import office from "../../assets/office.png";
import stadium from "../../assets/stadium.png";
import { FaCalendar } from 'react-icons/fa6';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

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
          categories.map(category =><NavLink to={`/category/${category.category_id}`} className='btn' key={category.category_id}>{category.category_name}</NavLink>
          )
        }
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src={kid}
              
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-semibold text-[#403F3F]">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
            
            <div className="card-actions justify-between">
              <p className="text-base font-medium text-[#403F3F]">Sports</p>
              <div className='flex gap-1'>
                <span> <FaCalendar></FaCalendar> </span>
                <p className="text-base font-medium text-[#9F9F9F]">{moment().format('MMMM Do YYYY')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src={office}
              
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-semibold text-[#403F3F]">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
            
            <div className="card-actions justify-between">
              <p className="text-base font-medium text-[#403F3F]">Sports</p>
              <div className='flex gap-1'>
                <span> <FaCalendar></FaCalendar> </span>
                <p className="text-base font-medium text-[#9F9F9F]">{moment().format('MMMM Do YYYY')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src={stadium}
             
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-semibold text-[#403F3F]">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
            
            <div className="card-actions justify-between">
              <p className="text-base font-medium text-[#403F3F]">Sports</p>
              <div className='flex gap-1'>
                <span> <FaCalendar></FaCalendar> </span>
                <p className="text-base font-medium text-[#9F9F9F]">{moment().format('MMMM Do YYYY')}</p>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      
    </div>
  );
};

export default LeftNavBar;