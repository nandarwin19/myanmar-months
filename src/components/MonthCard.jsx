import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
import jsonFile from "./../MyanmarMonths.json";

const MonthCard = () => {
  const { monthId } = useParams();
  const [monthData, setMonthData] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const month = jsonFile.Tbl_Months.find((month) => month.Id.toString() === monthId);
        setMonthData(month);
      } catch (error) {
        console.error('Error fetching months data:', error);
      }
    };
    
    fetchData();
  
  },[monthId])



  const goBack = () => {
    navigate(-1);
  }

  if(!monthData) {
    return <div>Loading...</div>;
  }

  const {MonthMm, MonthEn, FestivalMm, FestivalEn, Description, Detail, MonthImg} = monthData;
  
return (
  <div className='w-full h-full max-container padding-container mb-8 relative'>
    <div className='absolute bold-24 md:bold-32 cursor-pointer' onClick={goBack}><HiArrowLeft /></div>
      <div className='flexCenter flex-col gap-2'>
        <h1 className='text-black regular-24 md:regular-32 text-center'>{MonthMm} [{MonthEn}]</h1>
        <h1 className='regular-24 md:regular-32 text-center'>{FestivalMm} [{FestivalEn}]</h1>
      </div>
      <div className='flex items-start justify-start flex-col lg:flex-row gap-8 w-full mt-8'>
        <div className='lg:w-1/2 flex flex-col'>
          <img src={`/` + `${MonthImg}`} alt="monthImg" className='mb-4'/>
          <p className='tracking-wide leading-relaxed regular-18 text'>{Description}</p>
        </div>
        <p className='lg:w-1/2 tracking-wide leading-relaxed regular-18 mt-5'>{Detail}</p>
      </div>
      <div className="flexCenter mt-10">
        <button onClick={goBack} className='bg-white px-6 md:px-8 py-2 md:py-3 text-black border-black transition-all hover:bg-gray-100 hover:border-black border hover:text-black active:bg-black active:text-white cursor-pointer'>BACK</button>
      </div>
  </div>
);

}

export default MonthCard
