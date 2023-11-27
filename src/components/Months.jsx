import React, { useEffect, useState } from 'react';
import jsonFile from '../MyanmarMonths.json';
import MonthCards from './MonthCards';
import ImageSlider from './ImageSlider';
import { Link, useNavigate } from 'react-router-dom';


const Months = () => {
  const [jsonData, setJsonData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setJsonData(jsonFile.Tbl_Months);
      } catch (error) {
        console.error('Error Fetching months data:', error)
      }
    };

    fetchData();
  }, []);

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div className='w-full h-screen md:h-full bg-fixed z-0 bg-black-gradient bg-cover bg-no-repeat bg-center'>
      <div className={`max-container padding-container`}>
        <div className="relative">
          <h1 className='bold-28 md:bold-32 lg:bold-40 text-white tracking-wider line'>မြန်မာလအသေးစိတ်များ</h1>
          <div className="w-32 md:w-36 rounded-full h-[1.5px] md:h-[2.5px] md:mt-1 bg-white"></div>
        </div>

        {jsonData.length > 0 ? (
          <div>
            <ImageSlider images={jsonData.map(data => data.ImagePath)} ids={jsonData.map(data => data.Id)} names={jsonData.map(data => data.MonthMm)}/>

            <div className="hidden md:flex items-center justify-evenly flex-wrap gap-8 my-8">
              
              {jsonData.map((data, index) => (
                <Link to={`${data?.Id}`} key={index}>
                  <MonthCards {...data} key={index}/>
                </Link>
              ))}

              <button onClick={goBack} className='bg-white px-6 md:px-8 py-2 md:py-3 text-black border-black transition-all hover:bg-black hover:border-black border hover:text-white  active:bg-white active:text-black cursor-pointer'>BACK</button>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Months;
