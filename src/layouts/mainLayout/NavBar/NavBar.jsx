import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
  const [activeSectionId, setActiveSectionId] = useState(1);
  const pages = [
    {
      title:'لیست مشاغل',
      route:'',
      id:1
    },{
      title:'لیست شرکت ها',
      route:'company-list',
      id:2
    },{
      title:'ساخت رزومه',
      route:'resume-builder',
      id:3
    },{
      title:'درباره',
      route:'/',
      id:4
    },{
      title:'تماس با ما',
      route:'/',
      id:5
    },{
      title:'ورود',
      route:'login',
      id:6
    },{
      title:'ثبت نام',
      route:'Register',
      id:7
    },
  ]
  return (
    <div className= 'navBar flex justify-between items-center p-[3rem]' dir='rtl'>
      <div className="logoDiv">
        <Link to='/' className='gradient leading-[1.3] relative z-10 mx-auto inline-block text-[clamp(1.5rem,1vw,0.2rem)] font-black'>
          سامانه کاریابی دانشگاه آزاد
        </Link>
      </div>
      <div className="menu flex gap-8">
        {
          pages.map((item)=>{
            const isActive = item.id === activeSectionId;
            return (
              <li className={`hover:text-blueColor ${isActive?'text-blueColor transition-colors duration-500':'text-[#6f6f6f]'}`} key={item.id} onClick={() => setActiveSectionId(item.id)}>
                <Link to={`/${item.route}`} className='font-bold text-base'>{item.title}</Link>
              </li>
            )
          })
        }
      </div>
    </div>
  )
}

export default NavBar