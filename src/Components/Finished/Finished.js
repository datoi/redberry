import {Link, Outlet} from "react-router-dom";


const Finished = () => {
    return (
        <div>
            <div className=''>
                <Link to='/'><img className='finished-cv-ellipse' src="/images/Ellipse%201.png" alt=""/></Link>
                <Link to='/'><img className='Vector' src="/images/Vector.png" alt=""/></Link>
            </div>
            <div className='finished-resume'>
                <div className='mx-5 mt-5'>
                    <div className='d-flex justify-content-between'>
                        <div className='w-100'>
                            <div className=''>
                                <div className='cv-title mb-2'>
                                    <span>name surname </span>
                                </div>

                                <div className='personal-info my-3'>
                                    <div className='mb-1 d-flex'><img className='email' src="/images/dogy.png" alt=""/>
                                        <p>asd</p></div>
                                    <div className='d-flex'><img className='mobile' src="/images/phone.png" alt=""/>
                                        <p>+995</p>
                                    </div>
                                </div>
                            </div>
                            <div className='about-me-container my-4'>
                                <span className='about-me-title'>ჩემ შესახებ</span>
                                <p className='final-cv-notes my-3'>123</p>
                            </div>
                        </div>
                        <div className='picture-container'>
                            <div className='person-picture'><img src="" alt=""/></div>
                        </div>
                    </div>

                    <hr className='final-cv-divider my-4'/>
                    <div className='experience-container'>
                        <span className='experience-title'>გამოცდილება</span>
                        <p className='experiences'>react</p>
                        <p className='date'>date date</p>
                        <p className='final-cv-notes'>abj</p>
                    </div>
                    <hr className='final-cv-divider my-4'/>
                    <div className='education-container'>
                        <span className='education-title'>განათლება</span>
                        <p className='educations'>educations</p>
                        <p className='date'>date date</p>
                        <p className='final-cv-notes'>abj</p>
                    </div>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}
export default Finished