import {Link, Outlet} from "react-router-dom";
import {useState} from "react";


const Finished = () => {
    const [closed, setClose] = useState(false)

    return (
        <div className='d-flex'>
            <div className=''>
                <Link to='/'><img className='Ellipse' src="/images/Ellipse%201.png" alt=""/></Link>
                <Link to='/'><img className='Vector' src="/images/Vector.png" alt=""/></Link>
            </div>
            <div className='finished-resume'>
                <div className='mx-5 mt-4  h-100 d-flex justify-content-between'>
                    <div className='w-100 d-flex justify-content-start align-items-start flex-column h-100'>
                        <div className='d-flex justify-content-between w-100' style={{flex: '1'}}>
                            <div className=''>
                                <div className='cv-title '>
                                    <span>name surname </span>
                                </div>

                                <div className='personal-info mt-4'>
                                    <div className='d-flex'>
                                        <img className='email ' src="/images/dogy.png"/>
                                        <p className='m-0'>asd</p>
                                    </div>
                                    <div className='d-flex mt-2'>
                                        <img className='mobile ' src="/images/phone.png" alt=""/>
                                        <p className='m-0'>+995</p>
                                    </div>
                                </div>
                                <div className='about-me-container mt-4'>
                                    <p className='about-me-title'>ჩემ შესახებ</p>
                                    <span className='final-cv-notes my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eaque eveniet ex nihil porro quaerat repellendus.  doloremque esse quibusdam vel!</span>
                                </div>
                            </div>
                            <div className='person-picture'><img src="" alt=""/></div>
                        </div>
                        <hr className='final-cv-divider'/>
                        <div className='experience-container'>
                            <span className='experience-title'>გამოცდილება</span>
                            <p className='experiences mt-2'>react</p>
                            <p className='date'>date date</p>
                            <span className='final-cv-notes mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ad architecto consequuntur doloribus ducimus ea eaque, eligendi excepturi exercitationem id impedit .</span>
                        </div>
                        <hr className='final-cv-divider '/>
                        <div className='education-container'>
                            <span className='education-title'>განათლება</span>
                            <p className='educations mt-2'>educations</p>
                            <p className='date'>date date</p>
                            <span className='final-cv-notes mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  omnis provident ratione, rerum, ut vero.</span>
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
