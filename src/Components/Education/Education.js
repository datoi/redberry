import {Link, Outlet, useNavigate} from "react-router-dom";
import "../../App.css";
import {useEffect, useState} from "react";

const Education = () => {
    const [degrees, setDegrees] = useState([]);

    useEffect(() => {
        fetch("https://resume.redberryinternship.ge/api/degrees")
            .then(response => response.json())
            .then(responseData => {
                setDegrees(responseData);
            });
    }, []);


    const history = useNavigate();

    function Click() {
        history('/Finished');
    }

    function ClickPrevious() {
        history('/Experience');
    }

    const emptyEducation = {
        position: '',
        employer: '',
        start_date: '',
        due_date: '',
        description: ''

    }


    const [education, setEducation] = useState([emptyEducation]);

    const handleAddMoreEducation = () => {
        setEducation(values => (
            [...values, emptyEducation])
        )
    }
    return (

        <div className='cont d-flex vh-100'>
            <div className=''>
                <Link to='/'><img className='Ellipse' src="/images/Ellipse%201.png" alt=""/></Link>
                <Link to='/ '><img className='Vector' src="/images/Vector.png" alt=""/></Link>
            </div>
            <div className='inner-cont'>
                <div>
                    <nav className='navbar'>
                        <ul className='nav d-flex'>

                            <li className='page-titles'>განათლება</li>
                        </ul>
                        <li className='page-number list-unstyled align-self-center'>3/3</li>
                    </nav>

                </div>
                <hr className='personal-info-hr'/>
                <div className='sec-body'>
                    <div className='personal-info-data'>
                        <div className='row'>
                            <div className="col-12">
                                {Array.from(education).map((item, index) => {
                                    return (
                                        <div className='row'>
                                            <div className='mb-3'>
                                                <label>სასწავლებელი</label>
                                                <input type='' placeholder='სასწავლებელი' className='ps-3 w-100'/>
                                                <p>მინიმუმ 2 სიმბოლო</p>
                                            </div>

                                            <div className="input-group d-block col-6 w-50 mb-3">
                                                <label>ხარისხი</label>
                                                <select className="form-select w-100" id="select-degree"
                                                        aria-label="Example select with button addon">
                                                    <option selected>აირჩიეთ ხარისხი</option>
                                                    {degrees.map(degree => (
                                                        <option className='' value={degree.id}>{degree.title} </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="ps-4 col-6 w-50">
                                                <label>დამთავრების რიცხვი</label>
                                                <input type="date" className='ps-3 w-100'/>
                                            </div>
                                            <div className='col-12 mb-3 about-me-container p-0'>
                                                <label className='p-0'>აღწერა</label>
                                                <textarea type="text" className='ps-3 about-me-input w-100'
                                                          placeholder='განათლების აღწერა'/>
                                            </div>
                                            <hr className='my-4'/>
                                        </div>
                                    )
                                })}


                                <button onClick={handleAddMoreEducation} className='add-more border-0'><span
                                    className='add-more-note'>სხვა სასწავლებლის დამატება</span></button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='button-page-change-container d-flex justify-content-between mt-auto'>
                    <button onClick={ClickPrevious} className='button-page-change border-0 mt-auto'>
                        <Link to='Experience' className='text-decoration-none'><span
                            className='button-page-change-note'> უკან </span></Link>
                    </button>
                    <button onClick={Click} className='button-page-change border-0 mt-auto'>
                        <Link to='Experience' className='text-decoration-none'><span
                            className='button-page-change-note'> შემდეგი </span></Link>
                    </button>
                </div>
            </div>
            <div className='side-resume border-0 mt-0 position-absolute end-0'>
                <div className='mx-5 h-100 d-flex justify-content-between'>
                    <div className='w-100 '>
                        <div className='d-flex justify-content-between w-100 mt-4' style={{flex: '1'}}>
                            <div className=''>
                                <div className='cv-title mb-2'>
                                    <span>name surname </span>
                                </div>

                                <div className='personal-info my-3'>
                                    <div className='mb-1 d-flex'><img className='email' src="/images/dogy.png"
                                                                      alt=""/>
                                        <p>asd</p></div>
                                    <div className='d-flex'><img className='mobile' src="/images/phone.png" alt=""/>
                                        <p>+995</p>
                                    </div>
                                </div>
                                <div className='about-me-container mt-4'>
                                    <p className='about-me-title'>ჩემ შესახებ</p>
                                    <span className='final-cv-notes my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque distinctio excepturi facilis fuga id iure minus nesciunt nisi non nostrum nulla quaerat qui quidem quisquam quos repellendus rerum, veniam.</span>
                                </div>
                            </div>
                            <div className='person-picture'><img src="" alt=""/></div>
                        </div>
                        <hr className='final-cv-divider'/>
                        <div className='experience-container'>
                            <p className='experience-title'>გამოცდილება</p>
                            <p className='experiences'>react</p>
                            <p className='date'>date date</p>
                            <span className='final-cv-notes'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi, deserunt distinctio doloremque ducimus eaque, eligendi enim expedita in inventore laudantium, maiores molestiae optio porro quae similique sint ullam voluptatibus.</span>
                        </div>
                        <hr className='final-cv-divider'/>
                        <div className='education-container'>
                            <p className='education-title'>განათლება</p>
                            <p className='educations'>educations</p>
                            <p className='date'>date date</p>
                            <span className='final-cv-notes'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem facilis illum nulla sed sequi. Aliquam consectetur, cumque, enim iste natus nobis perspiciatis quae qui sed sunt tempore unde velit voluptate?</span>
                        </div>
                    </div>

                    <div className='resume-logo-container position-absolute bottom-0 start-0' style={{flex: '1'}}>
                        <img className='resume-logo ' src="/images/LOGO-12%201.png" alt=""/>
                    </div>
                </div>
            </div>
            <Outlet/>
        </div>

    )
}

    export default Education