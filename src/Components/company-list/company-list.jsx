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

export const CompanyList = () => {
  const companies = [
    {
      id: 1,
      image: logo1,
      location: 'San Francisco',
      desc: 'Apple یک شرکت فناوری بزرگ است که تلفن‌های هوشمند، کامپیوترهای شخصی و دستگاه‌های مرتبط را طراحی و تولید می‌کند.',
      company: 'Apple'
    },
    {
      id: 2,
      image: logo2,
      location: 'NYC',
      desc: 'گوگل یک شرکت فناوری بزرگ است که در حوزه موتور جستجو فعالیت می‌کند و به توسعه ابزارها و خدمات مرتبط با اینترنت متمرکز است.',
      company: 'Google'
    },
    {
      id: 3,
      image: logo3,
      location: 'Berlin',
      desc: 'آمازون یکی از بزرگترین فروشگاه‌های آنلاین جهان است و در زمینه فناوری اطلاعات فعالیت دارد، به ویژه در زمینه خدمات ابری و تجارت الکترونیک',
      company: 'Amazon'
    },
    {
      id: 4,
      image: logo4,
      location: 'Budapest',
      desc: 'Adobe یک شرکت نرم‌افزاری معروف است که محصولاتی مانند فتوشاپ، ایندیزاین و اکروبات را تولید می‌کند و در زمینه‌های طراحی و ویرایش تصویر و مستندات فعالیت دارد.',
      company: 'Adobe'
    },
    {
      id: 5,
      image: logo5,
      location: 'San Fransisco',
      desc: 'شرکت X، یک شرکت فناوری است که به دنبال استخدام یک مدیر ارشد فنی با تجربه در توسعه وب‌سایت‌های جذاب بصری است.',
      company: 'X corp.'
    },
    {
      id: 6,
      image: logo6,
      location: 'London',
      desc: 'EA یک شرکت مطرح در صنعت بازی سازی است که به دنبال استخدام توسعه‌دهندگان با تجربه در Unity و Unreal Engine می‌باشد.',
      company: 'Electronic Arts'
    },
    {
      id: 7,
      image: logo7,
      location: 'China',
      desc: 'Huawei یک شرکت فناوری چینی است که در زمینه توسعه و تولید دستگاه‌های مخابراتی،اپلیکیشن‌های موبایل و دسکتاپ فعالیت می‌کند.',
      company: 'Huawei'
    },
    {
      id: 8,
      image: logo8,
      location: 'Miami',
      desc: 'Intel یکی از بزرگترین شرکت‌های فناوری در دنیاست که در زمینه تولید پردازنده‌ها و تجهیزات مرتبط با آن‌ها فعالیت می‌کند.',
      company: 'Intel'
    },
    {
      id: 9,
      image: logo9,
      location: 'Seoul',
      desc: 'Samsung یکی از بزرگترین شرکت‌های فناوری جهان است که در زمینه تولید انواع دستگاه‌های الکترونیکی فعالیت می‌کند.',
      company: 'Samsung'
    },
    {
      id: 10,
      image: logo10,
      location: 'Cape Town',
      desc: 'TikTok یک شبکه اجتماعی و پلتفرم میزبانی ویدیو است که کاربران را قادر می‌سازد ویدیوهای کوتاه را ایجاد و به اشتراک بگذارند.',
      company: 'TikTok'
    },
    {
      id: 11,
      image: logo11,
      location: 'Texas',
      desc: 'MicroSoft یکی از بزرگترین شرکت‌های فناوری جهان است که در زمینه توسعه نرم‌افزار و ارائه خدمات فناوری اطلاعات فعالیت دارد.',
      company: 'MicroSoft'
    },
    {
      id: 12,
      image: logo12,
      location: 'Tokyo',
      desc: 'Nike یکی از پیشروهای صنعت ورزشی است که در زمینه طراحی و تولید لباس و تجهیزات ورزشی فعالیت دارد.',
      company: 'Nike'
    }

  ];
  return (
    <div className="flex flex-col justify-start">
      <h1 className="font-extrabold text-xl text-gray-600">لیست شرکت ها</h1>
      <div className="flex gap-10 justify-center flex-wrap items-center py-10">
        {
          companies.map(({ id, image, location, desc, company }) => {
            return (
              <div
                className="flex flex-col justify-between w-[250px] h-80 p-[20px] bg-white rounded-[10px] hover:bg-blueColor hover:text-white shadow-lg shadow-greyIsh-400/700 hover:shadow-lg cursor-pointer"
                key={id}>
                <div className="flex justify-between">
                  <img
                    src={image}
                    title="logo icons"
                    alt=""
                    className="w-9 h-9"
                  />
                  <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
                </div>
                <h6 className="text-[#ccc] text-sm mt-2 border-b-[2px]"> {location}</h6>
                <p className="text-[14px] text-[#959595] mt-0">
                  {desc}
                </p>
                <Link to={`/kiau-project/`}>
                  <button
                    className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-[#959595] hover:bg-gray-200 hover:text-textColor">
                    مشاهده موقعیت های شغلی
                  </button>
                </Link>
              </div>
            )
              ;
          })
        }
      </div>
    </div>
  );
};