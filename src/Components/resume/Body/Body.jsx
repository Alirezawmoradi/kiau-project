import React, { useState, useRef } from 'react';
import ReactToPrint from "react-to-print";
import Editor from "../Editor/Editor";
import Resume from '../Resume/Resume';
import {FaDownload} from "react-icons/fa6";


function Body() {
  const sections = {
    basicInfo: "اطلاعات اولیه",
    education: "سوابق تحصیلی",
    skills: "مهارت ها",
    workExp: "سوابق کاری",
    projects: "پروژه و نمونه کار",
    others: "توضیحات"
  }

  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.skills]: {
      id: sections.skills,
      sectionTitle: sections.skills,
      points: [],
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.projects]: {
      id: sections.projects,
      sectionTitle: sections.projects,
      details: [],
    },
    [sections.others]: {
      id: sections.others,
      sectionTitle: sections.others,
      detail: "",
    },
  });

  const resumeRef = useRef()

  return (
    <div className='text-center flex flex-col items-center justify-between gap-2' dir='rtl'>
      <div className='py-9 w-full flex items-center'>
        <div className='text-right w-full ml-12 text-gray-600 text-base font-light'>
          با رزومه‌نویس نوآورانه ما، به سوی آرزوهای حرفه‌ای خود سفری شگفت‌انگیز آغاز کنید. با استفاده از رابط کاربری دوست‌داشتنی ما، تجربیات خود را به یک داستان جذاب تبدیل کنید. رزومه‌ی خود را در زمان واقعی زنده ببینید و هر جزئیات را به‌طور دقیق تنظیم کنید. با اعتماد و اطمینان به بازار کار وارد شوید، مسلح به یک رزومه‌ی دوست‌داشتنی که آماده باز کردن درها و ایجاد فرصت‌های جدید است.</div>
      </div>
      <div className='flex flex-col h-full border shadow' id='editor'>
        <Editor
          sections={sections}
          resumeInformation={resumeInformation}
          setResumeInformation={setResumeInformation}
        />
      </div>
      <div className='py-1.5 w-11/12 flex items-center justify-between'>
        <p className='text-right w-full ml-12 text-gray-600 text-base font-light'>
          آیا رزومه‌ی شما نهایی شده است؟ با یک کلیک ساده، آن را به‌دست آورید و دانلود کنید و رزومه‌ی دوست‌داشتنی خود را داشته باشید.
        </p>
        <div className='flex justify-center items-center align-middle w-36 h-10 bg-blue-600 hover:bg-blue-700 rounded-2xl outline-none text-sm font-semibold text-white hover:text-gray-100 cursor-pointer transition-colors duration-300'>
          <ReactToPrint
            trigger={() => {
              return (
                <div className='flex gap-5'>
                <button >دانلود رزومه  </button>
                  <FaDownload className='pb-0' size={16} />
                </div>
              );
            }}
            content={() => resumeRef.current}
          />
        </div>
      </div>
      <div className='w-11/12 min-h-max p-0.5 border border-gray-300'>
        <Resume
          ref={resumeRef}
          sections={sections}
          resumeInformation={resumeInformation}
        />
      </div>
    </div>
  )
}

export default Body