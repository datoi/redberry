import {Link, Outlet} from "react-router-dom";
import {useState} from "react";


const Finished = ({formData, refreshClick}) => {

    const [closed, setClose] = useState(false)

    return (
        <div className='d-flex'>
            <div className=''>
                <Link onClick={refreshClick} to='/'><img className='Ellipse' src="/images/Ellipse%201.png" alt=""/><img
                    className='Vector' src="/images/Vector.png" alt=""/></Link>
            </div>
            <div className='finished-resume'>
                <div className='mx-5 mt-4  h-100 d-flex justify-content-between'>
                    <div className='w-100 d-flex justify-content-start align-items-start flex-column h-100'>
                        <div className='d-flex justify-content-between w-100' style={{flex: '1'}}>
                            <div className=''>
                                <div className='cv-title '>
                                    <span>{formData.name} {formData.surname}</span>
                                </div>

                                <div className='personal-info mt-4'>
                                    <div className='d-flex'>
                                        <img className='email ' src="/images/dogy.png"/>
                                        <p className='m-0'>{formData.email}</p>
                                    </div>
                                    <div className='d-flex mt-2'>
                                        <img className='mobile ' src="/images/phone.png" alt=""/>
                                        <p className='m-0'>{formData.phone_number}</p>
                                    </div>
                                </div>
                                <div className='about-me-container mt-4'>
                                    <p className='about-me-title'>ჩემ შესახებ</p>
                                    <span className='final-cv-notes my-3'>{formData.about_me}</span>
                                </div>
                            </div>
                            <div className=''><img className='person-picture' src={formData.image} alt=""/></div>
                        </div>
                        <hr className='final-cv-divider'/>
                        <div className='experience-container'>
                            <span className='experience-title'>გამოცდილება</span>
                            {formData.experiences.map(experience => (
                                <p className='experiences mt-2' key={experience}>{experience.position}</p>
                            ))}
                            {formData.experiences.map(experience => (
                                <p className='date' key={experience}>{experience.start_date} {experience.due_date}</p>
                            ))}
                            {formData.experiences.map(experience => (
                                <p className='employer' key={experience}>{experience.employer}</p>
                            ))}
                            {formData.experiences.map(experience => (
                                <p className='description mt-3' key={experience}>{experience.description}</p>
                            ))}
                        </div>
                        <hr className='final-cv-divider '/>
                        <div className='education-container'>
                            <span className='education-title'>განათლება</span>
                            {formData.educations.map(education => (
                                <p className='educations mt-2' key={education}>{education.institute}, {education.degree_id}</p>
                            ))}
                            {/**/}
                            {formData.educations.map(education => (
                                <p children='date' key={education}>{education.due_date}</p>
                            ))}
                            {formData.educations.map(education => (
                                <span className='final-cv-notes mt-3' key={education}>{education.description}</span>
                            ))}
                        </div>
                        <div className='resume-logo-container ' style={{flex: '1'}}>
                            <img className='resume-logo ms-0 ' src="/images/LOGO-12%201.png" alt=""/>
                        </div>
                    </div>

                </div>
            </div>

            {!closed && <div className='position-absolute end-0 resume-success'>
                <img className='float-end resume-success-X' onClick={() => setClose(!closed)} src="/images/X.png"
                     alt=""/>
                <div className=''>რეზიუმე წარმატებით გაიგზავნა 🎉</div>
            </div>}
            <Outlet/>
        </div>
    )
}
export default Finished
