import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts/mainLayout/main-layout.jsx';
import { Main } from './features/main/main.jsx';
import IdentityLayout from './layouts/identity-layout.jsx';
import { JobSeekerRegister } from './features/identity/components/job-seeker/job-seeker-register.jsx';
import { JobSeekerLogin } from './features/identity/components/job-seeker/job-seeker-login.jsx';
import { EmployerRegister } from './features/identity/components/employer/employer-register.jsx';
import { JobDetails } from './Components/job-details/job-details.jsx';
import { CompanyList } from './Components/company-list/company-list.jsx';
import { ResumeBuilder } from './Components/resume-builder/resume-builder.jsx';

const router = createBrowserRouter([
  {
    path: '/kiau-project/',
    element: <MainLayout />,
    children: [
      {
        element: <Main />,
        index: true
      }, {
        element: <JobDetails />,
        path: '/kiau-project/companies/:company/:title'
      }, {
        element: <CompanyList />,
        path: '/kiau-project/company-list'
      },{
        element: <ResumeBuilder />,
        path: '/kiau-project/resume-builder'
      }
    ]
  },
  {
    element: <IdentityLayout />,
    children: [
      {
        path: '/kiau-project/login',
        element: <JobSeekerLogin />
      }, {
        path: '/kiau-project/register',
        element: <JobSeekerRegister />
      }, {
        path: '/kiau-project/employer-register',
        element: <EmployerRegister />
      }
    ]
  }
]);

export default router;