import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export const JobSeekerRegister = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    if (!errors.mobile && !errors.password && !errors.confirmPassword) {
      setFormSubmitted(true);
      setTimeout(() => {
        navigate('/');
      }, [2000]);
    }
  };
  return (
    <>
      <div className="table-cell align-middle">
        <div className="block text-center mt-4">
          {/*<div className="flex justify-center">*/}
          {/*  <img src={logo} style={{ height: '100px' }} />*/}
          {/*</div>*/}
          <h1 className="text-center text-xl font-extrabold text-gray-600">پلتفرم کاریابی
            آنلاین</h1>
          <p className="leading-normal mt-4 text-base font-light text-gray-500">
            جهت استفاده از ویژگی های پلتفرم کاریابی آنلاین ثبت نام کنید
          </p>
          <p className="leading-normal mt-4 text-base font-light text-gray-500">
            کارفرما هستید؟
            <Link to="/kiau-project/employer-register" className="me-2 text-blue-600 mr-2 hover:underline">ثبت نام کارفرما</Link>
          </p>
        </div>
        <div
          className="mb-4 shadow relative flex flex-col min-w-0 break-words bg-white border bg-clip-border mt-5 rounded-lg">
          <div className="flex-auto p-2 block box-border">
            <div className="m-6 block box-bordex">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label
                    className="inline-block box-border cursor-default text-gray-500 mb-2">موبایل</label>
                  <input
                    {...register('mobile', {
                      required: 'موبایل الزامی است',
                      minLength: 11,
                      maxLength: 11
                    })}
                    className={`${errors.mobile ? 'min-h-1 py-1 outline-offset-2 focus:outline-red-200 bg-white border-red-500' : 'min-h-1 py-1 outline-offset-2 focus:outline-blue-200 bg-blue-100 border focus:border-blue-500'} min-h-1 py-1 pl-1.5 pr-4 outline-offset-2 bg-white border border-gray-300 rounded-md block w-full font-medium`} />
                  {
                    errors.mobile && errors.mobile.type === 'required' && (
                      <p className="text-red-700 dark:text-red-500 font-light text-xs mt-1">
                        {errors.mobile?.message}
                      </p>
                    )
                  }{
                  errors.mobile &&
                  (errors.mobile.type === 'minLength'
                    || errors.mobile.type === 'maxLength') && (
                    <p className="text-red-700 dark:text-red-500 font-light text-xs mt-1">
                      شماره موبایل باید 11 رقم باشد
                    </p>
                  )
                }
                </div>
                <div className="mb-3">
                  <label
                    className="inline-block box-border cursor-default text-gray-500 mb-2">رمز
                    عبور</label>
                  <input
                    {...register('password', {
                      required: 'رمز عبور الزامی است'
                    })}
                    className={`${errors.password ? 'min-h-1 py-1 outline-offset-2 focus:outline-red-200 bg-white border-red-500' : 'min-h-1 py-1 outline-offset-2 focus:outline-blue-200 bg-blue-100 border focus:border-blue-500'} min-h-1 py-1 pl-1.5 pr-4 outline-offset-2 bg-white border border-gray-300 rounded-md block w-full font-medium`}
                    type="password" />
                  {
                    errors.password && errors.password.type === 'required' && (
                      <p className="text-red-700 dark:text-red-500 font-light text-xs mt-1">
                        {errors.password?.message}
                      </p>
                    )
                  }
                </div>
                <div className="mb-3">
                  <label
                    className="inline-block box-border cursor-default text-gray-500 mb-2">تکرار
                    رمز عبور</label>
                  <input
                    {...register('confirmPassword', {
                      required: 'تکرار رمز عبور الزامی است',
                      validate: value => {
                        if (watch('password') !== value) {
                          return 'عدم تطابق با رمز وارد شده';
                        }
                      }
                    })}
                    className={`${errors.confirmPassword ? 'min-h-1 py-1 outline-offset-2 focus:outline-red-200 bg-white border-red-500' : 'min-h-1 py-1 outline-offset-2 focus:outline-blue-200 bg-blue-100 border focus:border-blue-500'} min-h-1 py-1 pl-1.5 pr-4 outline-offset-2 bg-white border border-gray-300 rounded-md block w-full font-medium`}
                    type="password" />
                  {
                    errors.confirmPassword && errors.confirmPassword.type === 'required' && (
                      <p className="text-red-700 dark:text-red-500 font-light text-xs mt-1">
                        {errors.confirmPassword?.message}
                      </p>
                    )
                  }
                  {
                    errors.confirmPassword && errors.confirmPassword.type === 'validate' && (
                      <p className="text-red-700 dark:text-red-500 font-light text-xs mt-1">
                        {errors.confirmPassword?.message}
                      </p>
                    )
                  }
                </div>
                <div className="mb-3 text-center">
                  <button type="submit"
                          className={`inline-block font-light text-sm mt-3 text-gray-200 border rounded-md w-32 h-8 ${formSubmitted && 'bg-blue-200 w-44'}`}
                          style={{
                            backgroundColor: '#3f80ea',
                            borderColor: '#3f80ea'
                          }}
                          disabled={formSubmitted}
                  >
                    {
                      formSubmitted ? 'در حال ذخیره اطلاعات ...' : 'ثبت نام کنید'
                    }
                  </button>
                  <div className='flex justify-between mt-6'>
                    <button type="submit"
                            className="text-white w-44  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2">
                      <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab"
                           data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                        <path fill="currentColor"
                              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                      </svg>
                      ثبت نام با گوگل
                      <div></div>
                    </button>
                    <button type="submit"
                            className="text-white w-44  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2">
                      <svg className="mr-2 -ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 2 44 44" version="1.1">
                        <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g id="Color-" transform="translate(-702.000000, -265.000000)" fill="#007EBB">
                            <path
                              fill="currentColor"
                              d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z"
                              id="LinkedIn">
                            </path>
                          </g>
                        </g>
                      </svg>
                      ثبت نام با لینکدین
                      <div></div>
                    </button>
                  </div>
                  {formSubmitted ?
                    (
                      <div className="rounded-md bg-green-100 w-full h-full text-green-500 text-sm font-light p-2 mt-3">
                        <p className="mb-0">عملیات با موفقیت انجام شد.</p>
                      </div>
                    ) :
                    undefined
                  }
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};