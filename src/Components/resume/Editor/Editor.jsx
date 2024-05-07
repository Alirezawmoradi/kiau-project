// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { X } from "react-feather";

function Editor(props) {
  // eslint-disable-next-line react/prop-types,no-unused-vars
  const { sections, resumeInformation, setResumeInformation } = props;

  //* States
  const [activeSectionObjectKey, setactiveSectionObjectKey] = useState(
    Object.keys(sections)[0]
  );

  const [activeInformation, setActiveInformation] = useState(
    resumeInformation[sections[Object.keys(sections)[0]]]
  );

  const [sectionTitle, setSectionTitle] = useState(
    sections[Object.keys(sections)[0]]
  );

  const [inputDataValues, setInputDataValues] = useState({
    name: activeInformation?.detail?.name || "",
    email: activeInformation?.detail?.email || "",
    phone: activeInformation?.detail?.phone || "",
    location: activeInformation?.detail?.location || "",
    github: activeInformation?.detail?.github || "",
    linkedin: activeInformation?.detail?.linkedin || "",
    objective: activeInformation?.detail?.objective || "",
    portfolio: activeInformation?.detail?.portfolio || "",
  });

  const [activeAddOnDetailIndex, setactiveAddOnDetailIndex] = useState(0);

  //* Section Body

  ///Basic information section
  const BasicInfoBody = (
    <div className="flex flex-col justify-between px-10 text-right mt-5">
      <div className="w-2/4">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label className="text-sm font-extrabold text-gray-500">
            عنوان
          </Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder=""
            className="min-h-1 py-1 pl-1.5 pr-4 mt-2 block bg-transparent font-extrabold text-sm text-gray-500"
            disabled
            value={sectionTitle}
            onChange={(event) => setSectionTitle(event.target.value)}
          />
        </Form.Group>
      </div>
      <div className="flex gap-5">
        <div className="w-2/4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              نام و نام خانوادگی
            </Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="علیرضا مرادی"
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-11/12 placeholder:text-xs"
              value={inputDataValues.name}
              onChange={(event) =>
                setInputDataValues((prev) => ({
                  ...prev,
                  name: event.target.value,
                }))
              }
            />
          </Form.Group>
        </div>
        <div className="w-2/4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              ایمیل
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Eg. example@abc.com"
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-11/12 placeholder:text-xs"
              value={inputDataValues.email}
              onChange={(event) =>
                setInputDataValues((prev) => ({
                  ...prev,
                  email: event.target.value,
                }))
              }
            />
          </Form.Group>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-2/4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              شماره تماس
            </Form.Label>
            <Form.Control
              type="text"
              name="phone"
              placeholder="026-31111111"
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-11/12 placeholder:text-xs"
              value={inputDataValues.phone}
              onChange={(event) =>
                setInputDataValues((prev) => ({
                  ...prev,
                  phone: event.target.value,
                }))
              }
            />
          </Form.Group>
        </div>
        <div className="w-2/4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              آدرس
            </Form.Label>
            <Form.Control
              type="text"
              name="location"
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-11/12 placeholder:text-xs"
              placeholder="استان البرز، کرج "
              value={inputDataValues.location}
              onChange={(event) =>
                setInputDataValues((prev) => ({
                  ...prev,
                  location: event.target.value,
                }))
              }
            />
          </Form.Group>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-2/4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              گیتهاب
            </Form.Label>
            <Form.Control
              type="text"
              name="github"
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-11/12 placeholder:text-xs"
              placeholder="لطفا لینک گیتهاب خود را وارد کنید ..."
              value={inputDataValues.github}
              onChange={(event) =>
                setInputDataValues((prev) => ({
                  ...prev,
                  github: event.target.value,
                }))
              }
            />
          </Form.Group>
        </div>
        <div className="w-2/4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              لینکدین
            </Form.Label>
            <Form.Control
              type="text"
              name="linkedin"
              placeholder="لطفا لینک لینکدین خود را وارد کنید ..."
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-11/12 placeholder:text-xs"
              value={inputDataValues.linkedin}
              onChange={(event) =>
                setInputDataValues((prev) => ({
                  ...prev,
                  linkedin: event.target.value,
                }))
              }
            />
          </Form.Group>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-2/4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              معرفی
            </Form.Label>
            <Form.Control
              as="textarea"
              name="objective"
              placeholder="خود را در چند خط معرفی کنید ..."
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-11/12 placeholder:text-xs"
              value={inputDataValues.objective}
              onChange={(event) =>
                setInputDataValues((prev) => ({
                  ...prev,
                  objective: event.target.value,
                }))
              }
            />
          </Form.Group>
        </div>
        <div className="w-2/4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              شبکه های اجتماعی
            </Form.Label>
            <Form.Control
              type="text"
              name="portfolio"
              placeholder="لطفا لینک پروفایل خود را وارد کنید ..."
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-11/12 placeholder:text-xs"
              value={inputDataValues.portfolio}
              onChange={(event) =>
                setInputDataValues((prev) => ({
                  ...prev,
                  portfolio: event.target.value,
                }))
              }
            />
          </Form.Group>
        </div>
      </div>
    </div>
  );

  ///Education section
  const EducationBody = (
    <div className="flex flex-col justify-between px-10 text-right mt-5">
      <div className="w-2/4">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label className="text-sm font-extrabold text-gray-500">
            عنوان
          </Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder=""
            className="min-h-1 py-1 pl-1.5 pr-4 mt-2 block bg-transparent font-extrabold text-sm text-gray-500"
            disabled
            value={sectionTitle}
            onChange={(event) => setSectionTitle(event.target.value)}
          />
        </Form.Group>
      </div>
      <div className="flex gap-5">
        <div className="w-2/4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              مقطع و رشته تحصیلی
            </Form.Label>
            <Form.Control
              type="text"
              name="courseName"
              placeholder="کارشناسی ارشد مهندسی کامپیوتر"
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-11/12 placeholder:text-xs"
              value={inputDataValues.courseName}
              onChange={(event) =>
                setInputDataValues((prev) => ({
                  ...prev,
                  courseName: event.target.value,
                }))
              }
            />
          </Form.Group>
        </div>
        <div className="w-2/4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              گرایش تحصیلی
            </Form.Label>
            <Form.Control
              type="text"
              name="specialization"
              placeholder="نرم افزار"
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-11/12 placeholder:text-xs"
              value={inputDataValues.specialization}
              onChange={(event) =>
                setInputDataValues((prev) => ({
                  ...prev,
                  specialization: event.target.value,
                }))
              }
            />
          </Form.Group>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-2/4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              نام دانشگاه/آموزشگاه محل تحصیل
            </Form.Label>
            <Form.Control
              type="text"
              name="collegeName"
              placeholder="دانشگاه آزاد اسلامی واحد کرج"
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-11/12 placeholder:text-xs"
              value={inputDataValues.collegeName}
              onChange={(event) =>
                setInputDataValues((prev) => ({
                  ...prev,
                  collegeName: event.target.value,
                }))
              }
            />
          </Form.Group>
        </div>
        <div className="w-2/4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              معدل
            </Form.Label>
            <Form.Control
              type="text"
              name="cgpa"
              placeholder="16"
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-11/12 placeholder:text-xs"
              value={inputDataValues.cgpa}
              onChange={(event) =>
                setInputDataValues((prev) => ({
                  ...prev,
                  cgpa: event.target.value,
                }))
              }
            />
          </Form.Group>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-2/4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              شروع تحصیل
            </Form.Label>
            <Form.Control
              type="date"
              name="eduStartDate"
              placeholder="1397/07/01"
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-11/12 placeholder:text-xs"
              value={inputDataValues.eduStartDate}
              onChange={(event) =>
                setInputDataValues((prev) => ({
                  ...prev,
                  eduStartDate: event.target.value,
                }))
              }
            />
          </Form.Group>
        </div>
        <div className="w-2/4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              پایان تحصیل
            </Form.Label>
            <Form.Control
              type="date"
              name="eduEndDate"
              placeholder=""
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-11/12 placeholder:text-xs"
              value={inputDataValues.eduEndDate}
              onChange={(event) =>
                setInputDataValues((prev) => ({
                  ...prev,
                  eduEndDate: event.target.value,
                }))
              }
            />
          </Form.Group>
        </div>
      </div>
    </div>
  );

  ///Skills section
  const SkillsBody = (
    <div className="flex flex-col justify-between px-10 text-right mt-5">
      <div className="w-2/4">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label className="text-sm font-extrabold text-gray-500">
            عنوان
          </Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder=""
            disabled
            className="min-h-1 py-1 pl-1.5 pr-4 mt-2 block bg-transparent font-extrabold text-sm text-gray-500"
            value={sectionTitle}
            onChange={(event) => setSectionTitle(event.target.value)}
          />
        </Form.Group>
      </div>
      <div className="flex gap-5">
        <div className="w-2/4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              مهارت های حرفه ای
            </Form.Label>
            <Form.Control
              type="text"
              name="0"
              placeholder="Nextjs, Reactjs"
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-11/12 placeholder:text-xs"
              value={inputDataValues.points ? inputDataValues.points[0] : ""}
              onChange={(event) => handlePointUpdate(event.target.value, 0)}
            />
          </Form.Group>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-2/4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              مهارت های نرم
            </Form.Label>
            <Form.Control
              type="text"
              name="1"
              placeholder="توانایی حل مسئله ، علاقه مند به کار تیمی و ..."
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-11/12 placeholder:text-xs"
              value={inputDataValues.points ? inputDataValues.points[1] : ""}
              onChange={(event) => handlePointUpdate(event.target.value, 1)}
            />
          </Form.Group>
        </div>
      </div>
    </div>
  );

  ///Work Exp section
  const WorkExperienceBody = (
    <div className="flex flex-col justify-between px-10 text-right mt-5">
      <div className="w-2/4">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label className="text-sm font-extrabold text-gray-500">
            عنوان
          </Form.Label>
          <Form.Control
            type="text"
            name="title"
            disabled
            placeholder=""
            className="min-h-1 py-1 pl-1.5 pr-4 mt-2 block bg-transparent font-extrabold text-sm text-gray-500"
            value={sectionTitle}
            onChange={(event) => setSectionTitle(event.target.value)}
          />
        </Form.Group>
      </div>
      <div className="flex gap-5">
        <div className="w-2/4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              عنوان شغل
            </Form.Label>
            <Form.Control
              type="text"
              name="roleName"
              placeholder="برنامه نویس فرانت ، برنامه نویس بک اند و ..."
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-11/12 placeholder:text-xs"
              value={inputDataValues.roleName}
              onChange={(event) =>
                setInputDataValues((prev) => ({
                  ...prev,
                  roleName: event.target.value,
                }))
              }
            />
          </Form.Group>
        </div>
        <div className="w-2/4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              نام شرکت
            </Form.Label>
            <Form.Control
              type="text"
              name="companyName"
              placeholder="علی بابا ، دیجی کالا و ..."
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-11/12 placeholder:text-xs"
              value={inputDataValues.companyName}
              onChange={(event) =>
                setInputDataValues((prev) => ({
                  ...prev,
                  companyName: event.target.value,
                }))
              }
            />
          </Form.Group>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-2/4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              شهر محل کار
            </Form.Label>
            <Form.Control
              type="text"
              name="state"
              placeholder="تهران ، کرج و ..."
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-11/12 placeholder:text-xs"
              value={inputDataValues.state}
              onChange={(event) =>
                setInputDataValues((prev) => ({
                  ...prev,
                  state: event.target.value,
                }))
              }
            />
          </Form.Group>
        </div>
        <div className="w-2/4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              کشور محل کار
            </Form.Label>
            <Form.Control
              type="text"
              name="country"
              placeholder="ایران ، آلمان و ..."
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-11/12 placeholder:text-xs"
              value={inputDataValues.country}
              onChange={(event) =>
                setInputDataValues((prev) => ({
                  ...prev,
                  country: event.target.value,
                }))
              }
            />
          </Form.Group>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-2/4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              تاریخ شروع فعالیت
            </Form.Label>
            <Form.Control
              type="date"
              name="workExpStartDate"
              placeholder=""
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-11/12 placeholder:text-xs"
              value={inputDataValues.workExpStartDate}
              onChange={(event) =>
                setInputDataValues((prev) => ({
                  ...prev,
                  workExpStartDate: event.target.value,
                }))
              }
            />
          </Form.Group>
        </div>
        <div className="w-2/4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              تاریخ اتمام فعالیت
            </Form.Label>
            <Form.Control
              type="date"
              name="workExpEndDate"
              placeholder=""
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-11/12 placeholder:text-xs"
              value={inputDataValues.workExpEndDate}
              onChange={(event) =>
                setInputDataValues((prev) => ({
                  ...prev,
                  workExpEndDate: event.target.value,
                }))
              }
            />
          </Form.Group>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-2/4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              توضیحات
            </Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              name="workExpSum1"
              placeholder="با استفاده از مهارت‌های B، A و C، بهبود X٪ در رشد برای XYZ دست‌یافتم و ..."
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 h-20 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-11/12 placeholder:text-xs"
              value={inputDataValues.workExpSum1}
              onChange={(event) =>
                setInputDataValues((prev) => ({
                  ...prev,
                  workExpSum1: event.target.value,
                }))
              }
            />
          </Form.Group>
        </div>
      </div>
    </div>
  );

  ///Project section
  const ProjectBody = (
    <div className="flex flex-col justify-between px-10 text-right mt-5">
      <div className="w-2/4">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label className="text-sm font-extrabold text-gray-500">
            عنوان
          </Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder=""
            className="min-h-1 py-1 pl-1.5 pr-4 mt-2 block bg-transparent font-extrabold text-sm text-gray-500"
            disabled
            value={sectionTitle}
            onChange={(event) => setSectionTitle(event.target.value)}
          />
        </Form.Group>
      </div>
      <div className="flex gap-5">
        <div className="w-full">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              عنوان پروژه
            </Form.Label>
            <Form.Control
              type="text"
              name="projectName"
              placeholder=""
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-11/12 placeholder:text-xs"
              value={inputDataValues.projectName}
              onChange={(event) =>
                setInputDataValues((prev) => ({
                  ...prev,
                  projectName: event.target.value,
                }))
              }
            />
          </Form.Group>
        </div>
      </div>
      <div className="w-full">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label className="text-sm font-extrabold text-gray-500">
            توضیحات پروژه
          </Form.Label>
          <Form.Control
            type="text"
            name="projectDesp"
            placeholder=""
            className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-11/12 placeholder:text-xs"
            value={inputDataValues.projectDesp}
            onChange={(event) =>
              setInputDataValues((prev) => ({
                ...prev,
                projectDesp: event.target.value,
              }))
            }
          />
        </Form.Group>
      </div>
      <div className="flex gap-5">
        <div className="w-2/4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              لینک گیتهاب پروژه
            </Form.Label>
            <Form.Control
              type="text"
              name="projectGithub"
              placeholder="لطفا لینک گیتهاب پروژه خود را وارد کنید ..."
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-10/12 placeholder:text-xs"
              value={inputDataValues.projectGithub}
              onChange={(event) =>
                setInputDataValues((prev) => ({
                  ...prev,
                  projectGithub: event.target.value,
                }))
              }
            />
          </Form.Group>
        </div>
        <div className="w-2/4">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              لینک نمایش پروژه
            </Form.Label>
            <Form.Control
              type="text"
              name="preview"
              placeholder="لطفا آدرس پروژه خود را وارد کنید ..."
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-10/12 placeholder:text-xs"
              value={inputDataValues.preview}
              onChange={(event) =>
                setInputDataValues((prev) => ({
                  ...prev,
                  preview: event.target.value,
                }))
              }
            />
          </Form.Group>
        </div>
      </div>
    </div>
  );

  ///Others section
  const OthersBody = (
    <div className="flex flex-col justify-between px-10 text-right mt-5">
      <div className="w-2/4">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label className="text-sm font-extrabold text-gray-500">
            عنوان
          </Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder=""
            className="min-h-1 py-1 pl-1.5 pr-4 mt-2 block bg-transparent font-extrabold text-sm text-gray-500"
            disabled
            value={sectionTitle}
            onChange={(event) => setSectionTitle(event.target.value)}
          />
        </Form.Group>
      </div>
      <div className="flex gap-5">
        <div className="w-full">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="text-sm font-extrabold text-gray-500">
              توضیحات دیگر
            </Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              name="other"
              placeholder=""
              className="min-h-1 py-1 pl-1.5 pr-4 mt-2 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block font-medium w-full h-24 placeholder:text-xs"
              value={inputDataValues.other}
              onChange={(event) =>
                setInputDataValues((prev) => ({
                  ...prev,
                  other: event.target.value,
                }))
              }
            />
          </Form.Group>
        </div>
      </div>
    </div>
  );

  //* Helper Functions
  const handlePointUpdate = (value, index) => {
    const tempInputDataValues = { ...inputDataValues };
    if (!Array.isArray(tempInputDataValues.points))
      tempInputDataValues.points = [];
    tempInputDataValues.points[index] = value;
    setInputDataValues(tempInputDataValues);
  };

  const handleNewAddDetail = () => {
    const details = activeInformation?.details;
    const lastDetail = details.slice(-1)[0];

    if (!details) return;
    if (!Object.keys(lastDetail).length) return;
    details.push({});

    // eslint-disable-next-line react/prop-types
    props.setResumeInformation((prev) => ({
      ...prev,
      [sections[activeSectionObjectKey]]: {
        ...resumeInformation[sections[activeSectionObjectKey]],
        details: details,
      },
    }));

    setactiveAddOnDetailIndex(details?.length - 1);
  };

  const handleNewDelDetail = (index) => {
    const details = activeInformation?.details
      ? // eslint-disable-next-line no-unsafe-optional-chaining
        [...activeInformation?.details]
      : "";

    if (!details) return;

    details.splice(index, 1);

    // eslint-disable-next-line react/prop-types
    props.setResumeInformation((prev) => ({
      ...prev,
      [sections[activeSectionObjectKey]]: {
        ...resumeInformation[sections[activeSectionObjectKey]],
        details: details,
      },
    }));

    setactiveAddOnDetailIndex((prev) => (prev === index ? 0 : prev - 1));
  };

  const generateSectionBody = () => {
    switch (sections[activeSectionObjectKey]) {
      // eslint-disable-next-line react/prop-types
      case sections.basicInfo:
        return BasicInfoBody;
      // eslint-disable-next-line react/prop-types
      case sections.education:
        return EducationBody;
      // eslint-disable-next-line react/prop-types
      case sections.skills:
        return SkillsBody;
      // case sections.achievements:
      //     return AchievementsBody;
      // eslint-disable-next-line react/prop-types
      case sections.workExp:
        return WorkExperienceBody;
      // eslint-disable-next-line react/prop-types
      case sections.projects:
        return ProjectBody;
      // case sections.POR:
      //     return PORBody;
      // eslint-disable-next-line react/prop-types
      case sections.others:
        return OthersBody;
      default:
        return null;
    }
  };

  const handleComponentSubmission = () => {
    switch (sections[activeSectionObjectKey]) {
      // eslint-disable-next-line react/prop-types
      case sections.basicInfo: {
        const tempDetail = {
          name: inputDataValues.name,
          email: inputDataValues.email,
          phone: inputDataValues.phone,
          location: inputDataValues.location,
          github: inputDataValues.github,
          linkedin: inputDataValues.linkedin,
          objective: inputDataValues.objective,
          portfolio: inputDataValues.portfolio,
        };

        // eslint-disable-next-line react/prop-types
        props.setResumeInformation((prev) => ({
          ...prev,
          // eslint-disable-next-line react/prop-types
          [sections.basicInfo]: {
            // eslint-disable-next-line react/prop-types
            ...prev[sections.basicInfo],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      // eslint-disable-next-line react/prop-types
      case sections.education: {
        const tempDetail = {
          courseName: inputDataValues.courseName,
          specialization: inputDataValues.specialization,
          collegeName: inputDataValues.collegeName,
          cgpa: inputDataValues.cgpa,
          eduStartDate: inputDataValues.eduStartDate,
          eduEndDate: inputDataValues.eduEndDate,
        };

        // eslint-disable-next-line no-unsafe-optional-chaining,react/prop-types
        const tempDetails = [...resumeInformation[sections.education]?.details];
        tempDetails[activeAddOnDetailIndex] = tempDetail;

        // eslint-disable-next-line react/prop-types
        props.setResumeInformation((prev) => ({
          ...prev,
          // eslint-disable-next-line react/prop-types
          [sections.education]: {
            // eslint-disable-next-line react/prop-types
            ...prev[sections.education],
            details: tempDetails,
            sectionTitle,
          },
        }));

        break;
      }
      // eslint-disable-next-line react/prop-types
      case sections.skills: {
        const tempPoints = inputDataValues.points;

        // eslint-disable-next-line react/prop-types
        props.setResumeInformation((prev) => ({
          ...prev,
          // eslint-disable-next-line react/prop-types
          [sections.skills]: {
            // eslint-disable-next-line react/prop-types
            ...prev[sections.skills],
            points: tempPoints,
            sectionTitle,
          },
        }));

        break;
      }
      // eslint-disable-next-line react/prop-types
      case sections.workExp: {
        const tempDetail = {
          roleName: inputDataValues.roleName,
          companyName: inputDataValues.companyName,
          state: inputDataValues.state,
          country: inputDataValues.country,
          workExpStartDate: inputDataValues.workExpStartDate,
          workExpEndDate: inputDataValues.workExpEndDate,
          workExpSum1: inputDataValues.workExpSum1,
        };

        // eslint-disable-next-line no-unsafe-optional-chaining,react/prop-types
        const tempDetails = [...resumeInformation[sections.workExp]?.details];
        tempDetails[activeAddOnDetailIndex] = tempDetail;

        // eslint-disable-next-line react/prop-types
        props.setResumeInformation((prev) => ({
          ...prev,
          // eslint-disable-next-line react/prop-types
          [sections.workExp]: {
            // eslint-disable-next-line react/prop-types
            ...prev[sections.workExp],
            details: tempDetails,
            sectionTitle,
          },
        }));

        break;
      }
      // eslint-disable-next-line react/prop-types
      case sections.projects: {
        const tempDetail = {
          projectName: inputDataValues.projectName,
          projectDesp: inputDataValues.projectDesp,
          projectGithub: inputDataValues.projectGithub,
          preview: inputDataValues.preview,
        };

        // eslint-disable-next-line no-unsafe-optional-chaining,react/prop-types
        const tempDetails = [...resumeInformation[sections.projects]?.details];
        tempDetails[activeAddOnDetailIndex] = tempDetail;

        // eslint-disable-next-line react/prop-types
        props.setResumeInformation((prev) => ({
          ...prev,
          // eslint-disable-next-line react/prop-types
          [sections.projects]: {
            // eslint-disable-next-line react/prop-types
            ...prev[sections.projects],
            details: tempDetails,
            sectionTitle,
          },
        }));

        break;
      }
      // eslint-disable-next-line react/prop-types
      case sections.others: {
        const tempDetail = inputDataValues.other;

        // eslint-disable-next-line react/prop-types
        props.setResumeInformation((prev) => ({
          ...prev,
          // eslint-disable-next-line react/prop-types
          [sections.others]: {
            // eslint-disable-next-line react/prop-types
            ...prev[sections.others],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      default:
        break;
    }
    console.log(resumeInformation);
  };

  //* Effects
  useEffect(() => {
    const activeInfo = resumeInformation[sections[activeSectionObjectKey]];

    setActiveInformation(activeInfo);
    setSectionTitle(sections[activeSectionObjectKey]);
    setactiveAddOnDetailIndex(0);
    setInputDataValues({
      name: activeInfo?.detail?.name || "",
      email: activeInfo?.detail?.email || "",
      phone: activeInfo?.detail?.phone || "",
      location: activeInfo?.detail?.location || "",
      github: activeInfo?.details
        ? activeInfo.details[0]?.github || ""
        : activeInfo?.detail?.github || "",
      linkedin: activeInfo?.detail?.linkedin || "",
      objective: activeInfo?.detail?.objective || "",
      portfolio: activeInfo?.detail?.portfolio || "",
      //Education
      courseName: activeInfo?.details
        ? activeInfo.details[0]?.courseName || ""
        : "",
      specialization: activeInfo?.details
        ? activeInfo.details[0]?.specialization || ""
        : "",
      collegeName: activeInfo?.details
        ? activeInfo.details[0]?.collegeName || ""
        : "",
      cgpa: activeInfo?.details ? activeInfo.details[0]?.cgpa || "" : "",
      eduStartDate: activeInfo?.details
        ? activeInfo.details[0]?.eduStartDate || ""
        : "",
      eduEndDate: activeInfo?.details
        ? activeInfo.details[0]?.eduEndDate || ""
        : "",
      //Skills Achievements
      points: activeInfo?.details
        ? activeInfo.details[0]?.points
          ? // eslint-disable-next-line no-unsafe-optional-chaining
            [...activeInfo.details[0]?.points]
          : ""
        : activeInfo?.points
        ? [...activeInfo.points]
        : "",
      //Work Experience
      roleName: activeInfo?.details
        ? activeInfo.details[0]?.roleName || ""
        : "",
      companyName: activeInfo?.details
        ? activeInfo.details[0]?.companyName || ""
        : "",
      state: activeInfo?.details ? activeInfo.details[0]?.state || "" : "",
      country: activeInfo?.details ? activeInfo.details[0]?.country || "" : "",
      workExpStartDate: activeInfo?.details
        ? activeInfo.details[0]?.workExpStartDate || ""
        : "",
      workExpEndDate: activeInfo?.details
        ? activeInfo.details[0]?.workExpEndDate || ""
        : "",
      workExpSum1: activeInfo?.details
        ? activeInfo.details[0]?.workExpSum1 || ""
        : "",
      //Projects
      projectName: activeInfo?.details
        ? activeInfo.details[0]?.projectName || ""
        : "",
      projectDesp: activeInfo?.details
        ? activeInfo.details[0]?.projectDesp || ""
        : "",
      projectGithub: activeInfo?.details
        ? activeInfo.details[0]?.projectGithub || ""
        : "",
      preview: activeInfo?.details ? activeInfo.details[0]?.preview || "" : "",
      //others
      other: typeof activeInfo?.detail !== "object" ? activeInfo?.detail : "",
    });
  }, [activeSectionObjectKey, resumeInformation, sections]);

  useEffect(() => {
    setActiveInformation(resumeInformation[sections[activeSectionObjectKey]]);
  }, [activeSectionObjectKey, resumeInformation, sections]);

  useEffect(() => {
    const details = activeInformation?.details;
    if (!details) return;

    const activeInfo = resumeInformation[sections[activeSectionObjectKey]];
    const activeAddOnDetail = activeInfo?.details?.[activeAddOnDetailIndex];
    if (!activeAddOnDetail) return;
    setInputDataValues({
      courseName: activeInfo?.details[activeAddOnDetailIndex]?.courseName
        ? activeInfo?.details[activeAddOnDetailIndex]?.courseName
        : "",
      specialization: activeInfo?.details[activeAddOnDetailIndex]
        ?.specialization
        ? activeInfo?.details[activeAddOnDetailIndex]?.specialization
        : "",
      collegeName: activeInfo?.details[activeAddOnDetailIndex]?.collegeName
        ? activeInfo?.details[activeAddOnDetailIndex]?.collegeName
        : "",
      cgpa: activeInfo?.details[activeAddOnDetailIndex]?.cgpa
        ? activeInfo?.details[activeAddOnDetailIndex]?.cgpa
        : "",
      eduStartDate: activeInfo?.details[activeAddOnDetailIndex]?.eduStartDate
        ? activeInfo?.details[activeAddOnDetailIndex]?.eduStartDate
        : "",
      eduEndDate: activeInfo?.details[activeAddOnDetailIndex]?.eduEndDate
        ? activeInfo?.details[activeAddOnDetailIndex]?.eduEndDate
        : "",
      roleName: activeInfo?.details[activeAddOnDetailIndex]?.roleName
        ? activeInfo?.details[activeAddOnDetailIndex]?.roleName
        : "",
      companyName: activeInfo?.details[activeAddOnDetailIndex]?.companyName
        ? activeInfo?.details[activeAddOnDetailIndex]?.companyName
        : "",
      state: activeInfo?.details[activeAddOnDetailIndex]?.state
        ? activeInfo?.details[activeAddOnDetailIndex]?.state
        : "",
      country: activeInfo?.details[activeAddOnDetailIndex]?.country
        ? activeInfo?.details[activeAddOnDetailIndex]?.country
        : "",
      workExpSum1: activeInfo?.details[activeAddOnDetailIndex]?.workExpSum1
        ? activeInfo?.details[activeAddOnDetailIndex]?.workExpSum1
        : "",
      projectName: activeInfo?.details[activeAddOnDetailIndex]?.projectName
        ? activeInfo?.details[activeAddOnDetailIndex]?.projectName
        : "",
      projectDesp: activeInfo?.details[activeAddOnDetailIndex]?.projectDesp
        ? activeInfo?.details[activeAddOnDetailIndex]?.projectDesp
        : "",
      github: activeInfo?.details[activeAddOnDetailIndex]?.github
        ? activeInfo?.details[activeAddOnDetailIndex]?.github
        : "",
      preview: activeInfo?.details[activeAddOnDetailIndex]?.preview
        ? activeInfo?.details[activeAddOnDetailIndex]?.preview
        : "",
      positionName: activeInfo?.details[activeAddOnDetailIndex]?.positionName
        ? activeInfo?.details[activeAddOnDetailIndex]?.positionName
        : "",
      responsibilities: activeInfo?.details[activeAddOnDetailIndex]
        ?.responsibilities
        ? activeInfo?.details[activeAddOnDetailIndex]?.responsibilities
        : "",
    });
  }, [
    activeAddOnDetailIndex,
    activeInformation?.details,
    activeSectionObjectKey,
    resumeInformation,
    sections,
  ]);

  return (
    <>
      <div className="flex gap-24 overflow-x-auto border-b px-20 py-5">
        {Object.keys(sections)?.map((key) => (
          <div
            className={`font-extrabold text-sm cursor-pointer 
                                ${
                                  activeSectionObjectKey === key
                                    ? "text-blue-500 transition-colors duration-500"
                                    : "text-gray-400"
                                }
                                `}
            key={key}
            onClick={() => {
              setactiveSectionObjectKey(key);
            }}
          >
            {sections[key]}
          </div>
        ))}
      </div>
      <div className="min-h-96 p-5 text-right">
        <div className="w-max mr-5 mb-10">
          {activeInformation?.details
            ? activeInformation?.details?.map((item, index) =>
                activeAddOnDetailIndex === index ? (
                  <Button
                    className="w-max mr-5 mb-10"
                    key={item.title + index}
                    onClick={() => setactiveAddOnDetailIndex(index)}
                    variant="primary"
                  >
                    {sections[activeSectionObjectKey]} {index + 1}
                    <X
                      size={16}
                      className="ml-1 mb-px p-px"
                      onClick={() => {
                        handleNewDelDetail(index);
                      }}
                    />
                  </Button>
                ) : (
                  <Button
                    className="w-max mr-5 mb-10"
                    key={item.title + index}
                    variant="secondary"
                    onClick={() => setactiveAddOnDetailIndex(index)}
                  >
                    {sections[activeSectionObjectKey]} {index + 1}
                    <X
                      size={16}
                      className="ml-1 mb-px p-px"
                      onClick={() => {
                        handleNewDelDetail(index);
                      }}
                    />
                  </Button>
                )
              )
            : ""}
          {activeInformation?.details &&
          activeInformation?.details?.length > 0 ? (
            <Button
              variant="info"
              className="w-max mr-5 mb-10"
              onClick={handleNewAddDetail}
            >
              Add
            </Button>
          ) : (
            ""
          )}
        </div>

        {generateSectionBody()}
        <div className="flex justify-center items-center mt-12 mb-12">
          <Button
            className="w-36 h-10 bg-blue-600 hover:bg-blue-700 rounded-2xl outline-none text-sm font-semibold text-white hover:text-gray-100 cursor-pointer transition-colors duration-300"
            onClick={handleComponentSubmission}
          >
            ذخیره
          </Button>
        </div>
      </div>
    </>
  );
}

export default Editor;
