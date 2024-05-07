import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export const EmployerRegister = () => {
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
            کارجو هستید؟
            <Link to='/register' className="me-2 text-blue-600 mr-2 hover:underline">ثبت نام کارجو</Link>
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
                      <p className='text-red-700 dark:text-red-500 font-light text-xs mt-1'>
                        {errors.mobile?.message}
                      </p>
                    )
                  }{
                  errors.mobile &&
                  (errors.mobile.type === 'minLength'
                    || errors.mobile.type === 'maxLength') && (
                    <p className='text-red-700 dark:text-red-500 font-light text-xs mt-1'>
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
                      <p className='text-red-700 dark:text-red-500 font-light text-xs mt-1'>
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
                      <p className='text-red-700 dark:text-red-500 font-light text-xs mt-1'>
                        {errors.confirmPassword?.message}
                      </p>
                    )
                  }
                  {
                    errors.confirmPassword && errors.confirmPassword.type === 'validate' && (
                      <p className='text-red-700 dark:text-red-500 font-light text-xs mt-1'>
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
                          }} disabled={formSubmitted}
                  >
                    {
                      formSubmitted ? 'در حال ذخیره اطلاعات ...' : 'ثبت نام کنید'
                    }
                  </button>
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