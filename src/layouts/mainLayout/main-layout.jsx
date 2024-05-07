import NavBar from './NavBar/NavBar.jsx';
import { Outlet } from 'react-router-dom';
import FooterDiv from './FooterDiv/FooterDiv.jsx';

export const MainLayout = () => {
  return (
    <>
      <div className="flex-wrap min-h-full ">
        <div className="flex  flex-col w-full min-h-full min-w-0 transition-all ease-in-out duration-200">
          <NavBar />
          <main className="p-10 flex-1 w-[85%] m-auto bg-white">
            <div className="w-full mx-auto p-0">
              <Outlet />
            </div>
          </main>
          <div className='w-[85%] m-auto'>
            <FooterDiv />
          </div>
        </div>
      </div>
    </>
  );
};