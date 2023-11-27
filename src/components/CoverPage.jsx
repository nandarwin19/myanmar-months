import React from 'react';
import { HiArrowRightCircle } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const CoverPage = () => {
  return (
    <div className='w-full h-full bg-fixed z-0 bg-coverBg bg-cover bg-no-repeat bg-center'>
        <div className="w-full h-screen flexCenter flex-col gap-2">
            <h1 className='bold-64 md:bold-120 tracker-wider text-[#fff]'>မြန်မာလများ</h1>
            <Link to="/months">
                <button className='btn_cover regular-18 md:regular-20 flex items-center gap-2'>
                    <p>ဖတ်ရှုရန်</p>
                    <HiArrowRightCircle />
                </button>
            </Link>
        </div>
    </div>
  )
}

export default CoverPage