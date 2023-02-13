import {Link, Outlet, useNavigate} from "react-router-dom";
import "../../App.css";
import {useEffect, useState} from "react";

const Experience = ({formData, onInputChange}) => {
    const history = useNavigate();

    function Click() {
        history('/Education');
    }

    function ClickPrevious() {
        history('/PersonalInfo');
    }

    const emptyExperienceObject = {
        position: '',
        employer: '',
        start_date: '',
        due_date: '',
        description: ''
    }

    const [formDataState, setFormDataState] = useState(formData);

    useEffect(() => {
        setFormDataState(formData);
    });

    const handleChange = (e, index) => {
        const name = e.target.name;
        const value = e.target.value;
        const result = formDataState.experiences.map((item, i) => {
            if (i === index) {
                return {
                    ...item,
                    [name]: value
                };
            }
            return item;
        });

        setFormDataState(values => (
            {...values, experiences: result}
        ))

        onInputChange(formDataState);
    };

    const handleAddMoreExperience = () => {
        const experiences = formDataState.experiences;
        experiences.push(emptyExperienceObject);
        setFormDataState(values => (
            {...values, experiences: experiences}
        ))
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
                            <li className='page-titles'>გამოცდილება</li>
                        </ul>
                        <li className='page-number list-unstyled align-self-center'>2/3</li>
                    </nav>
                </div>
                <hr className='personal-info-hr'/>
                <div className='sec-body'>
                    <div className='personal-info-data'>
                        {Array.from(formDataState.experiences).map((item, index) => {
                            return (
                                <div key={index} className='row'>
                                    <div className="col-12 mb-3">
                                        <label>თანამდებობა</label>
                                        <input type="text"
                                               name="position"
                                               value={item.position}
                                               onChange={(e) => handleChange(e, index)}
                                               placeholder='დეველოპერი, დიზაინერი, ა.შ' className='ps-3 w-100'/>
                                        <p>მინიმუმ 2 სიმბოლო</p>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <label>დამსაქმებელი</label>
                                        <input type="text"
                                               name="employer"
                                               value={item.employer}
                                               onChange={(e) => handleChange(e, index)}
                                               placeholder='დამსაქმებელი' className='ps-3 w-100'/>
                                        <p>მინიმუმ 2 სიმბოლო</p>
                                    </div>
                                    <div className="col-6 mb-3 w-50">
                                        <label>დაწყების რიცხვი</label>
                                        <input name="start_date"
                                               type="date"
                                               value={item.start_date}
                                               onChange={(e) => handleChange(e, index)}
                                               className='ps-3 w-100'/>
                                    </div>
                                    <div className="ps-4 col-6 mb-3 w-50">
                                        <label>დამთავრების რიცხვი</label>
                                        <input type="date" className='ps-3 w-100'/>
                                    </div>
                                    <div className='col-12 mt-3 about-me-container p-0'>
                                        <label className='p-0'>აღწერა</label>
                                        <textarea type="text" className='ps-3 about-me-input w-100'
                                                  placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'/>
                                    </div>
                                    <hr className='my-4'/>
                                </div>

                            )
                        })}
                        <button onClick={handleAddMoreExperience} className='add-more border-0'><span
                            className='add-more-note'>მეტი გამოცდილების დამატება</span></button>

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

            <div className='side-resume border-0 mt-0 position-absolute end-0 '>
                <div className='mx-5 h-100 d-flex justify-content-between'>
                    <div className='w-100 '>
                        <div className='d-flex justify-content-between w-100 mt-4' style={{flex: '1'}}>
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
                                <div className='about-me-container mt-4'>
                                    <p className='about-me-title'>ჩემ შესახებ</p>
                                    <span className='final-cv-notes my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi cum dolorem eos mollitia perferendis quae, quia. Accusamus, accusantium debitis, distinctio ipsa iusto, necessitatibus quam quis quisquam sed vitae voluptates!</span>
                                </div>
                            </div>
                            <div className='person-picture'><img src="" alt=""/></div>
                        </div>
                        <hr className='final-cv-divider'/>
                        <div className='experience-container'>
                            <p className='experience-title'>გამოცდილება</p>
                            <p className='experiences'>react</p>
                            <p className='date'>date date</p>
                            <span className='final-cv-notes'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita pariatur porro tempora! At cum distinctio ea iste, laborum nisi officiis quis similique? At blanditiis commodi dolorum id, omnis sed. Quia.</span>
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

export default Experience