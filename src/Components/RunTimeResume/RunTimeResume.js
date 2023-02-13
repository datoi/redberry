const RunTimeResume = ({formData}) => {
    return (
        <div>
            <div className='side-resume border-0 mt-0 position-absolute end-0'>
                <div className='mt-4 mx-5 h-100 d-flex justify-content-between'>
                    <div className='w-100'>
                        <div className='d-flex justify-content-between w-100 mt-4' style={{flex: '1'}}>
                            <div className=''>
                                <div className='cv-title mb-2'>
                                    <span className='name_surname'>{formData.name} {formData.surname}</span>
                                </div>
                                <div className='personal-info my-3'>
                                    {formData.email.length > 0 && (
                                        <div className='mb-1 d-flex'><img className='email' src="/images/dogy.png"/>
                                            <span>{formData.email}</span>
                                        </div>
                                    )}
                                    {formData.phone_number.length > 0 && (
                                        <div className='d-flex'><img className='mobile' src="/images/phone.png"/>
                                            <span>{formData.phone_number}</span>
                                        </div>
                                    )}
                                </div>
                                {formData.about_me.length > 0 && (
                                    <div className='about-me-container mt-3'>
                                        <span className='about-me-title'>ჩემ შესახებ</span>
                                        <p className='description'>{formData.about_me}</p>
                                    </div>
                                )}
                            </div>
                            {formData.image.length > 0 && (
                                <div className='mb-1 d-flex'><img className='person-picture' src={formData.image}/>

                                </div>
                            )}
                        </div>


                        {formData.experiences.length > 0 && formData.experiences[0].position.length > 0 && (
                            <div className='experience-container'>
                                <hr className='final-cv-divider'/>
                                <span className='experience-title'>გამოცდილება</span>
                                {Array.from(formData.experiences).map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <p className='experiences'>{item.position}, {item.employer}</p>
                                            <p className='date'>{item.start_date} - {item.due_date}</p>
                                            <p className='description'>{item.description}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        )}

                        {formData.educations.length > 0 && formData.educations[0].institute.length > 0 && (
                            <div className='education-container'>
                                <hr className='final-cv-divider'/>
                                <span className='education-title'>განათლება</span>
                                {Array.from(formData.educations).map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <p className='educations'>{item.institute}, {item.degree_id}</p>
                                            <p className='date'>{item.due_date}</p>
                                            <p className='description'>{item.description}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        )}


                    </div>

                    <div className='resume-logo-container position-absolute bottom-0 start-0' style={{flex: '1'}}>
                        <img className='resume-logo ' src="/images/LOGO-12%201.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RunTimeResume