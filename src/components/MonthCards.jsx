import { HiArrowRightCircle } from 'react-icons/hi2';

const MonthCards = ({
  ImagePath,
  MonthMm,
  Id
}) => {
  return (
    <div className="flex" key={Id}>
      <div className='card-img w-[310px] flex items-center justify-center h-full p-4 rounded-5xl flex-col transparent my-4 relative overflow-hidden transition-all duration-500'>
        <img src={`/` + `${ImagePath}`} alt="img" className='w-[80%] md:w-[300px] h-[380px] object-cover rounded-3xl' />
        <div className="hover-card absolute top-0 right-0 w-full h-full items-center justify-center rounded-5xl flex-col bg-white gap-4">
          <p className='text-black bold-32'>{MonthMm}</p>
          <button className='btn_card regular-12 flex items-center justify-center gap-2'>
            <p>ဖတ်ရှုရန်</p>
            <HiArrowRightCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MonthCards;
