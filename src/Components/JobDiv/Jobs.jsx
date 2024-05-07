import { BiTimeFive } from 'react-icons/bi';
import logo1 from '../../assets/apple.png';
import logo2 from '../../assets/google.png';
import logo3 from '../../assets/amazon.png';
import logo4 from '../../assets/adobe2.png';
import logo5 from '../../assets/x.png';
import logo6 from '../../assets/amazon.png';
import logo7 from '../../assets/hu.png';
import logo8 from '../../assets/intel.png';
import logo9 from '../../assets/samsung.png';
import logo10 from '../../assets/tiktok.png';
import logo11 from '../../assets/ms.png';
import logo12 from '../../assets/nike.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';


  const Data = [
  {
    id: 1,
    image: logo1,
    title: 'توسعه دهنده وب',
    time: 'اکنون',
    location: 'San Francisco',
    desc: 'ما یک توسعه دهنده فرانت برای شرکت خود می خواهیم. شما باید در توسعه وب سایت جذاب بصری تجربه داشته باشید.',
    company: 'Apple'
  },
  {
    id: 2,
    image: logo2,
    title: 'طراح UI-UX',
    time: 'دیروز',
    location: 'NYC',
    desc: 'گوگل می خواهد طراحان UI/UX را استخدام کند. شما باید در Figma و Adobe XD تجربه کنید',
    company: 'Google'
  },
  {
    id: 3,
    image: logo3,
    title: 'کارشناس نرم افزار',
    time: '14 ساعت پیش',
    location: 'Berlin',
    desc: 'آمازون می خواهد مهندسان نرم افزار را استخدام کند. شما باید زبان های جاوا اسکریپت (پشته MERN) و برنامه نویسی پایتون را تجربه کنید.',
    company: 'Amazon'
  },
  {
    id: 4,
    image: logo4,
    title: 'مدیر تولید',
    time: '2 ساعت پیش',
    location: 'Budapest',
    desc: 'Adobe می‌خواهد مدیر محصول با تجربه بالا را استخدام کند که بتواند کل تیم را برای موفقیت مدیریت کند',
    company: 'Adobe'
  },
  {
    id: 5,
    image: logo5,
    title: 'مدیر ارشد فناوری',
    time: 'الان',
    location: 'San Fransisco',
    desc: 'X یک مدیر ارشد فنی برای شرکت ما می خواهید. شما باید در توسعه وب سایت جذاب بصری تجربه داشته باشید.',
    company: 'X corp.'
  },
  {
    id: 6,
    image: logo6,
    title: 'توسعه دهنده بازی',
    time: 'الان',
    location: 'London',
    desc: 'EA یک توسعه دهنده بازی برای شرکت ما می خواهد. شما باید در Unity و Un Real Engine تجربه داشته باشید',
    company: 'Electronic Arts'
  },
  {
    id: 7,
    image: logo7,
    title: 'برنامه نویس موبایل',
    time: 'الان',
    location: 'China',
    desc: 'هوآوی یک توسعه دهنده اپلیکیشن موبایل و دسکتاپ می خواهد. شما باید در توسعه برنامه های جذاب بصری تجربه داشته باشید.',
    company: 'Huawei'
  },
  {
    id: 8,
    image: logo8,
    title: 'دانشمند داده',
    time: 'الان',
    location: 'Miami',
    desc: 'ما یک دانشمند داده برای شرکت خود می خواهیم. شما باید در توسعه و تجزیه و تحلیل داده ها تجربه داشته باشید.',
    company: 'Intel'
  },
  {
    id: 9,
    image: logo9,
    title: 'تحلیلگر فناوری',
    time: '12 ساعت پیش',
    location: 'Seoul',
    desc: 'ما یک تحلیلگر فنی برای شرکت خود می خواهیم.',
    company: 'Samsung'
  },
  {
    id: 10,
    image: logo10,
    title: ' توسعه دهنده React',
    time: '5 روز پیش',
    location: 'Cape Town',
    desc: 'ما یک توسعه دهنده React می خواهیم.',
    company: 'TikTok'
  },
  {
    id: 11,
    image: logo11,
    title: 'برنامه نویس C-C++',
    time: 'الان',
    location: 'Texas',
    desc: 'مایکروسافت برنامه‌نویس C/C++ را برای شرکت ما می‌خواهد.',
    company: 'MicroSoft'
  },
  {
    id: 12,
    image: logo12,
    title: 'طراح',
    time: '2 روز پیش',
    location: 'Tokyo',
    desc: 'ما طراح را برای شرکت خود می خواهیم.',
    company: 'Nike'
  }

];

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobClick = (job) => { 
    localStorage.setItem('job-detail',JSON.stringify(job))
    setSelectedJob(job);
  };
  return (
    <>
      <div className="flex gap-10 justify-center flex-wrap items-center py-10">
        {
          Data.map(({ id, image, title, time, location, desc, company }) => (
            <div key={id}
                 className="flex flex-col justify-between w-[250px] h-80 p-[20px] bg-white rounded-[10px] hover:bg-blueColor hover:text-white shadow-lg shadow-greyIsh-400/700 hover:shadow-lg cursor-pointer">
      <span className="flex justify-between items-center gap-2">
        <h1 className="text-sm font-semibold text-textColor group-hover:text-white mb-0">
          {title}
        </h1>
        <span className="flex items-center text-[#ccc] gap-1 text-xs">
          <BiTimeFive /> {time}
        </span>
      </span>
              <h6 className="text-[#ccc] text-sm mt-2 border-b-[2px]"> {location}</h6>
              <p className="text-[14px] text-[#959595] mt-0">
                {desc}
              </p>
              <div className="company flex justify-between gap-2">
                <img
                  src={image}
                  title="logo icons"
                  alt=""
                  className="w-5 h-5"
                />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>
              <Link to={`/companies/${company}/${title}`}>
                <button
                  className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-[#959595] hover:bg-gray-200 hover:text-textColor"
                  onClick={() => handleJobClick({ id, image, title, time, location, desc, company })}
                >
                  مشاهده جزئیات
                </button>
              </Link>
            </div>
          ))
        }
      </div>
    </>
  );
};
export default Jobs;
