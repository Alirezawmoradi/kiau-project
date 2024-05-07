import { AiFillInstagram, AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai"

const FooterDiv = () => {
  return (
    <div className="footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-start justify-center">
      <div className='mx-0'>
          <h1 className='text-lg font-extrabold text-white pb-[1.5rem]'>
            سامانه کاریابی دانشگاه آزاد
          </h1>
        <p className="text-white pb-[13px] opacity-70 leading-7 text-sm">ما همیشه سعی می‌کنیم تا جستجوی کارمندان و کسب‌وکارها برای یافتن بهترین شغل و کارفرمایان برای یافتن بهترین کاندیداها را فراهم کنیم.</p>
      </div>
      <div className="grid mr-auto">
        <span className="text-[18px] font-semibold pb-[1.5rem] text-white">
          منابع
        </span>
        <div className="grid gap-3 font-bold text-sm">
          <li className="text-white opacity-[.7] hover:opacity-[1]">حساب کاربری</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">پشتیبانی</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">بازخورد</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">تماس با ما</li>
        </div>
      </div>

      <div className="grid mr-auto">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          پشتیبانی
        </span>
        <div className="grid gap-3 font-bold text-sm">
          <li className="text-white opacity-[.7] hover:opacity-[1]">رویدادها</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">تبلیغات</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">درخواست دمو</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">فرصت‌های شغلی</li>
        </div>
      </div>

      <div className="grid mr-auto">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          شرکت
        </span>
        <div className="grid gap-3 font-bold text-sm">
          <li className="text-white opacity-[.7] hover:opacity-[1]">درباره ما</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">ویژگی‌ها</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">اخبار</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">سوالات متداول</li>
        </div>
      </div>

      <div className="grid  mr-auto">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          اطلاعات تماس
        </span>
        <div>
          <small className="text-[14px] text-white">support@kiau.com</small>
          <div className="icons flex gap-4 py-[1rem]">
            <AiFillInstagram className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor" href="instagram.com/nahtty2.0" target="_black"/>
            <AiOutlineGithub className=" bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor" href="github.com/lijnati" target="_black"/>
            <AiOutlineTwitter className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor" href="twitter.com/yegetaneh12" target="_black"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterDiv
