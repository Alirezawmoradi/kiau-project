import React from 'react'
import './JobCards.css'
import './JobDetails.css'
import Jobs from '../JobDiv/Jobs'
import { useState } from 'react';
import { Link } from "react-router-dom";
import StarRatings from 'react-star-ratings';

export const JobDetails = () => {
  const [saved, setSaved] = useState(true)
  return (
    <><div>
      <div className="jobHeadings" style={{ marginBottom: '20px' }}>
        <div className="titlee">
          <h1 style={{ fontSize: 28 }}>برنامه نویس فرانت-اند</h1>
          <svg
            //  onClick={() => setCrossit(!crossit)}
            className="cross" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.536 7.8987c-0.1953-0.19526-0.5119-0.19526-0.7071 0l-2.8284 2.8284-2.8285-2.8284c-0.19526-0.19527-0.51185-0.19527-0.70711 0l-0.56568 0.56568c-0.19527 0.19526-0.19526 0.51185 0 0.70711l2.8285 2.8284-2.8285 2.8285c-0.19526 0.1952-0.19526 0.5118 0 0.7071l0.56568 0.5657c0.19527 0.1952 0.51185 0.1952 0.70711 0l2.8285-2.8285 2.8284 2.8284c0.1952 0.1953 0.5118 0.1953 0.7071 0l0.5657-0.5657c0.1952-0.1953 0.1952-0.5118 0-0.7071l-2.8284-2.8284 2.8283-2.8284c0.1953-0.19526 0.1953-0.51184 0-0.70711l-0.5656-0.56568z" clipRule="evenodd" fill="#2D2D2D" fillRule="evenodd"></path></svg>
        </div>
        <div className="comp">
          <h4 style={{ fontSize: 18 }}>اسنپ فود
          </h4>
          <p className="rating" style={{ fontSize: 18 }}>
            <StarRatings
              rating={4}
              starDimension="18px"
              starSpacing="1px"
              starRatedColor="#3f80ea"

            />

          </p>
          <p style={{ fontSize: 18 }}> - دورکاری</p>
        </div>
        <h4 style={{ fontSize: 18 }}>تهران , سیدخندان</h4>
        <div className="apply">
          <div className="app"><Link to="/apply">  ارسال رزومه</Link></div>
          {saved ? <img onClick={() => setSaved(!saved)} src="/heart.png" alt="" /> : <img onClick={() => setSaved(!saved)} src="/oheart.png" alt="" />}
        </div>
      </div>
      <div className="detailed">
        <div className="detailed">
          <div id="jobDescriptionText" className="jobsearch-jobDescriptionText">
            <strong>شرح موقعیت شغلی:</strong>
            <p style={{ marginRight: '10px' }}>مسلط به سئو و اصول سئوی داخلی، خارجی و تکنیکال</p>
            <p style={{ marginRight: '10px' }}>تسلط به انواع روش‌های لینک‌سازی</p>
            <p style={{ marginRight: '10px' }}>مسلط به اجرای کمپین‌های رپورتاژ آگهی</p>
            <p style={{ marginRight: '10px' }}>تسلط به ابزارهای سئو (گوگل وب مستر، گوگل آنالیتیک و غیره)</p>
            <p style={{ marginRight: '10px' }}>نوشتن استراتژی محتوا (تولید محتوا به عهده تیم تولید محتوا می‌باشد.)</p>
            <p style={{ marginRight: '10px' }}>توانایی آنالیز رقبا</p>
            <p style={{ marginRight: '10px' }}>روحیه‌ کار تیمی</p>
            <p style={{ marginRight: '10px' }}>خوش برخورد و منظم</p>
            <p style={{ marginRight: '10px' }}>بیمه تامین اجتماعی</p>
            <p style={{ marginRight: '10px' }}>بیمه تکمیلی</p>
            <p style={{ marginRight: '10px' }}>پاداش به ازای هر پروژه</p>
            <p style={{ marginRight: '10px' }}>ساعت کاری: شنبه تا چهارشنبه از ساعت 9:00 الی 17:00 و پنج‌شنبه‌ها تعطیل</p>
            <p style={{ marginRight: '10px' }}>محدوده شرکت: مترو میرداماد</p>
          </div>
          <div style={{ marginTop: 30 }} id="jobDescriptionText" className="jobsearch-jobDescriptionText">
            <strong> معرفی شرکت:</strong>
            <p style={{ marginRight: '10px' }}>سئودو یک آژانس دیجیتال مارکتینگ 360 درجه یا شرکت تبلیغاتی که تمامی خدمات تبلیغات آنلاین یا آفلاین را انجام دهد، نیست. آژانس سئودو بصورت تخصصی و صرفاً روی خدمات سئو و تبلیغات گوگل (گوگل ادز) تمرکز دارد و به همین دلیل تضمین کیفیت و خدمات جزئی از تمامی قراردادهای این مجموعه است.</p>
          </div>
        </div>

      </div>

    </div><br />
      <hr /><br />
      <h1 style={{ fontSize: 28 }}>مشاغل مشابه</h1>
      <Jobs /></>

  )
}
