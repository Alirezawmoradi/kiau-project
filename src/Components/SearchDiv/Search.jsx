import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai';
import { BsHouseDoor } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';

const Search = () => {
  return (
    <div className="searchDiv grid gap-7 bg-greyIsh rounded-[10px] p-[3rem]">
      <form>
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[70px] bg-white p-5 shadow-lg shadow-greyIsh-700 text-sm">
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className="text-[25px] icon" />
            <input type="text" className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
                   placeholder="جستجوی مشاغل" />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon " />
          </div>
          <div className="flex gap-2 items-center">
            <BsHouseDoor className="text-[25px] icon" />
            <input type="text" className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
                   placeholder="جستجو شرکت ها" />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon " />
          </div>
          <div className="flex gap-2 items-center">
            <CiLocationOn className="text-[25px] icon" />
            <input type="text" className="bg-transparent text-blue-500 focus:outline-none w-56"
                   placeholder="جستجو بر اساس موقعیت مکانی" />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon " />
          </div>
          <button className="bg-blueColor h-full p-3 px-10 rounded-[10px] text-white cursor-pointer  hover:bg-blue-400">
            جستجو
          </button>
        </div>
      </form>
      <div className="secDiv flex items-center gap-10 justify-center">
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className="text-[#808080] font-semibold text-sm">مرتب سازی براساس :</label>
          <select name="" id="relevance" className="bg-white rounded-[3px] px-4 py-1 text-sm font-bold">
            <option value="">ارتباط</option>
            <option value="">شامل</option>
            <option value="">شروع می شود با</option>
            <option value="">شامل</option>
          </select>
        </div>
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="tyoe" className="text-[#808080] font-semibold text-sm">نوع قرارداد :</label>
          <select name="" id="type" className="bg-white rounded-[3px] px-4 py-1 text-sm font-bold">
            <option value="">تمام وقت</option>
            <option value="">پاره وقت</option>
            <option value="">دورکاری</option>
            <option value="">کارآموزی</option>
          </select>
        </div>
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="level" className="text-[#808080] font-semibold text-sm">سطح ارشدیت :</label>
          <select name="" id="level" className="bg-white rounded-[3px] px-4 py-1 text-sm font-bold">
            <option value="">ارشد</option>
            <option value="">مبتدی</option>
            <option value="">متوسط</option>
            <option value="">کارآموز</option>
          </select>
        </div>
        <span className="flex items-center justify-center text-[#a1a1a1] w-24 h-8  cursor-pointer font-semibold text-sm hover:bg-gray-200 hover:rounded-md transition-all duration-300">حذف فیلترها</span>
      </div>
    </div>

  );
};

export default Search;