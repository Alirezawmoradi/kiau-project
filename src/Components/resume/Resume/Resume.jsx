// eslint-disable-next-line no-unused-vars
import React, {forwardRef, useEffect, useState} from "react";

// eslint-disable-next-line react/display-name
const Resume = forwardRef((props, ref) => {

    // eslint-disable-next-line react/prop-types
    const {sections, resumeInformation} = props;

    const [columns, setColumns] = useState([[]]);

    const info = {
        // eslint-disable-next-line react/prop-types
        basicInfo: resumeInformation[sections.basicInfo],
        // eslint-disable-next-line react/prop-types
        education: resumeInformation[sections.education],
        // eslint-disable-next-line react/prop-types
        skills: resumeInformation[sections.skills],
        // eslint-disable-next-line react/prop-types
        workExp: resumeInformation[sections.workExp],
        // eslint-disable-next-line react/prop-types
        projects: resumeInformation[sections.projects],
        // eslint-disable-next-line react/prop-types
        others: resumeInformation[sections.others],
    };

    const getFormattedDate = (value) => {
        if (!value) return "";
        const date = new Date(value);
        const month = date.toLocaleString('default', {month: 'short'});
        return `${month}, ${date.getFullYear()}`;
    };

    const sectionDiv = {
        // eslint-disable-next-line react/prop-types
        [sections.basicInfo]: (
            <div key={"basicInfo"}>
                <div className='flex flex-col items-center'>
                    {
                        info?.basicInfo?.detail?.name
                            ?
                            (
                                <div className='text-lg font-extrabold'>
                                    {info?.basicInfo?.detail?.name.toUpperCase()}
                                </div>
                            )
                            : <></>
                    }
                    <div className='flex mt-3'>
                        {
                            info?.basicInfo?.detail?.phone
                                ?
                                (
                                    <div className='text-sm font-medium'>
                                        {info?.basicInfo?.detail?.phone}

                                    </div>
                                )
                                : <></>
                        }
                        {
                            info?.basicInfo?.detail?.location ? (
                                    <div className='text-sm font-medium mr-10'>
                                        {info?.basicInfo?.detail?.location}
                                    </div>
                                ) :
                                <></>
                        }

                    </div>
                    <div className='flex mt-3'>
                        {
                            info?.basicInfo?.detail?.email
                                ?
                                (
                                    <div className='mx-1 text-sm font-extrabold text-blue-600'>
                                        <a href={`mailto:${info?.basicInfo?.detail?.email}`}>Email</a>
                                    </div>
                                )
                                : <></>
                        }
                        {
                            info?.basicInfo?.detail?.linkedin
                                ?
                                (
                                    <div className='mx-1 text-sm font-extrabold text-blue-600'>
                                        <a href={`${info?.basicInfo?.detail?.linkedin}`}>LinkedIn</a>
                                    </div>
                                )
                                : <></>
                        }
                        {
                            info?.basicInfo?.detail?.github
                                ?
                                (
                                    <div className='mx-1 text-sm font-extrabold text-blue-600'>
                                        <a href={`${info?.basicInfo?.detail?.github}`}>GitHub</a>
                                    </div>
                                )
                                : <></>
                        }
                        {
                            info?.basicInfo?.detail?.portfolio
                                ?
                                (
                                    <div className='mx-1 text-sm font-extrabold text-blue-600'>
                                        <a href={`${info?.basicInfo?.detail?.portfolio}`}>Portfolio</a>
                                    </div>
                                )
                                : <></>
                        }
                    </div>
                </div>
                <div className='my-2'>
                    {
                        info?.basicInfo?.detail?.objective
                            ?
                            (

                                <>
                                    <div className='text-base font-extrabold relative text-right mt-10'>معرفی</div>
                                    <div className='mt-6 text-right'>
                                        {info?.basicInfo?.detail?.objective}
                                    </div>
                                </>
                            )
                            : <></>
                    }
                </div>
            </div>
        ),
        // eslint-disable-next-line react/prop-types
        [sections.education]: (
            <div key={"education"} className='mt-10'>
                {
                    info?.education?.details.length > 0
                        ? <div className='text-base font-extrabold relative'>سوابق تحصیلی</div>
                        : <></>

                }
                {info.education?.details?.map((item) => (
                    <>
                        <div className='mt-2'>
                            <div className='flex justify-between'>
                                <div className='flex font-medium text-base'>
                                    {
                                        item.courseName
                                            ?
                                            (
                                                <div className='flex text-sm font-extrabold'> مقطع و رشته تحصیلی
                                                    :{item.courseName}</div>
                                            )
                                            : <></>
                                    }
                                </div>
                                <div className='flex'>
                                    {
                                        item.cgpa
                                            ?
                                            (
                                                <div className='flex text-sm font-extrabold'> معدل
                                                    : {item.cgpa} &nbsp;&nbsp;</div>
                                            )
                                            : <></>
                                    }
                                    {
                                        item.eduStartDate
                                            ?
                                            (
                                                item.eduEndDate
                                                    ?
                                                    (
                                                        <div className='flex text-sm font-extrabold'>
                                                            {

                                                                `( ${getFormattedDate(item.eduStartDate)} - ${getFormattedDate(item.eduEndDate)} )`
                                                            }

                                                        </div>
                                                    )
                                                    :
                                                    (
                                                        <div className='flex text-sm font-extrabold'>
                                                            {
                                                                `( ${getFormattedDate(item.eduStartDate)} - Present )`
                                                            }

                                                        </div>
                                                    )


                                            )
                                            : <></>
                                    }
                                </div>
                            </div>
                            {
                                item.specialization
                                    ?
                                    (
                                        <div className='mt-2 flex text-sm font-extrabold'>گرایش تحصیلی
                                            : {item.specialization}</div>
                                    )
                                    : <></>
                            }
                            {
                                item.collegeName
                                    ?
                                    (
                                        <div className='mt-2 flex text-sm font-extrabold'> نام دانشگاه/آموزشگاه محل
                                            تحصیل
                                            :{item.collegeName}</div>
                                    )
                                    : <></>
                            }
                        </div>
                    </>

                ))}
            </div>
        ),
        // eslint-disable-next-line react/prop-types
        [sections.skills]: (
            <div key={"skills"} className='mt-10'>
                {
                    info?.skills?.points.length > 0
                        ?
                        (
                            <>
                                <div className='text-base font-extrabold relative'>مهارت ها</div>
                                {
                                    info?.skills?.points[0]
                                        ?
                                        (
                                            <div className='flex'>
                                                <div className='mt-2 text-sm font-extrabold relative w-36'>
                                                    مهارت های فنی
                                                </div>
                                                <div className='mt-2 text-sm font-extrabold relative w-52'>
                                                    {info?.skills?.points[0]}
                                                </div>
                                            </div>

                                        )
                                        : <></>
                                }
                                {
                                    info?.skills?.points[1]
                                        ?
                                        (
                                            <div className='flex'>
                                                <div className='mt-2 text-sm font-extrabold relative w-36'>
                                                    مهارت های نرم
                                                </div>
                                                <div className='mt-2 text-sm font-extrabold relative w-36'>
                                                    {info?.skills?.points[1]}
                                                </div>
                                            </div>

                                        )
                                        : <></>
                                }
                            </>

                        )
                        :
                        <></>
                }
            </div>
        ),
        // eslint-disable-next-line react/prop-types
        [sections.workExp]: (
            <div key={"workExp"} className='mt-10'>
                {
                    info?.workExp?.details.length > 0
                        ? <div className='mt-2 text-base font-extrabold relative'>سوابق کاری</div>
                        : <></>

                }
                <div className='mt-2'>
                    {info.workExp?.details?.map((item) => (
                        <>
                            <div className='flex flex-col'>
                                <div className='flex justify-between'>
                                    {
                                        item.roleName
                                            ?
                                            <div className='mt-2 text-sm font-extrabold relative'>{item.roleName}</div>
                                            :
                                            <></>

                                    }
                                    {
                                        item.workExpStartDate
                                            ?
                                            (
                                                item.workExpEndDate
                                                    ?
                                                    (
                                                        <div className='mt-2 text-sm font-extrabold relative'>
                                                            {

                                                                `${getFormattedDate(item.workExpStartDate)} - ${getFormattedDate(item.workExpEndDate)}`
                                                            }

                                                        </div>
                                                    )
                                                    :
                                                    (
                                                        <div className='mt-2 text-sm font-extrabold relative'>
                                                            {
                                                                `${getFormattedDate(item.workExpStartDate)} - Present `
                                                            }

                                                        </div>
                                                    )


                                            )
                                            : <></>
                                    }
                                </div>
                                <div className='flex justify-between'>
                                    {
                                        item.companyName
                                            ?
                                            <div
                                                className='flex justify-between mt-2 text-sm font-extrabold relative'>{item.companyName}</div>
                                            :
                                            <></>

                                    }
                                    {
                                        item.state && item.country
                                            ?
                                            <div
                                                className='mt-2 text-sm font-extrabold relative'>{`${item.state}, ${item.country}`}</div>
                                            :
                                            <></>

                                    }
                                </div>
                            </div>
                            <div className='mt-2 text-sm font-extrabold relative'>
                                <ul>
                                    {
                                        item.workExpSum1
                                            ?
                                            <li>{item.workExpSum1}</li>
                                            :
                                            <></>
                                    }
                                </ul>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        ),
        // eslint-disable-next-line react/prop-types
        [sections.projects]: (
            <div key={"projects"} className='mt-10'>
                {
                    info?.projects?.details.length > 0
                        ? <div className='text-base font-extrabold relative'>نمونه کار</div>
                        : <></>

                }
                <div className='mt-2'>
                    {info.projects?.details?.map((item) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className='my-2'>
                            <div className='mt-2 flex text-sm font-extrabold'>{item.projectName}</div>
                            <div className='flex'>
                                <div className='flex mt-2 text-sm font-extrabold'>
                                    {item.projectDesp}
                                    &nbsp;
                                    {
                                        info?.projects?.details?.projectGithub === ""
                                            ? <></>
                                            : <a href={`${item.projectGithub}`}
                                                 className='ml-5 mr-5 text-blueColor'>(GitHub)</a>
                                    }
                                    {
                                        info?.projects?.details?.preview === ""
                                            ? <></>
                                            : <a href={`${item.preview}`} className='text-blueColor'>(Preview)</a>
                                    }
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        ),

        // eslint-disable-next-line react/prop-types
        [sections.others]: (
            <div key={"others"} className='mt-10'>
                {
                    info?.others?.detail === ""
                        ? <></>
                        : <div className='mt-2 text-base font-extrabold relative'>توضیحات دیگر</div>

                }
                <div className='mt-2 text-sm font-extrabold relative'>
                    <ul>
                        {
                            info?.others?.detail === ""
                                ? <></>
                                : <li>{info?.others?.detail}</li>

                        }
                    </ul>
                </div>
            </div>
        )
    }


    useEffect(() => {
        setColumns([
            [
                // eslint-disable-next-line react/prop-types
                sections.basicInfo,
                // eslint-disable-next-line react/prop-types
                sections.education,
                // eslint-disable-next-line react/prop-types
                sections.skills,
                // eslint-disable-next-line react/prop-types
                sections.workExp,
                // eslint-disable-next-line react/prop-types
                sections.projects,
                // eslint-disable-next-line react/prop-types
                sections.others,
            ]
        ]);
    }, []);


    return (
        <div ref={ref} className='flex flex-col justify-center text-right p-10' dir='rtl'>
            {columns[0].map((item) => sectionDiv[item])}
        </div>
    )
})

export default Resume