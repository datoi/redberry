import {Link, Outlet, useNavigate} from "react-router-dom";
import  "../../App.css";
import {useState} from "react";

const Experience = () => {
    const history = useNavigate();

    function Click() {
        history('/Education');
    }function ClickPrevious() {
        history('/PersonalInfo');
    }

    const [addedExperience, setNewExperience] = useState(0);

    const ClickAddMoreExperience = () => {
        setNewExperience(addedExperience + 1);
    }
    return (
        <div className='cont'>
            <div className='inner-cont'>
                <Link to='/'><img className='Ellipse' src="/images/Ellipse%201.png" alt=""/></Link>
                <Link to='/'><img className='Vector' src="/images/Vector.png" alt=""/></Link>
                <header>
                    <nav className='navbar'>
                        <ul className='nav d-flex'>
                            <li className='align-self-center'>

                            </li>
                            <li className='page-titles'>გამოცდილება</li>
                        </ul>
                        <li className='page-number list-unstyled align-self-center'>2/3</li>
                    </nav>

                </header>
                <hr className='personal-info-hr'/>
                <section className='sec-body'>
                    <div className='personal-info-data'>
                        <div className='row'>
                            <div className="col-12">
                                <label>თანამდებობა</label>
                                <input type="text" placeholder='დეველოპერი, დიზაინერი, ა.შ' className='ps-3 w-100'/>
                                <p>მინიმუმ 2 სიმბოლო</p>
                            </div>
                            <div className="col-12">
                                <label>დამსაქმებელი</label>
                                <input type="text" placeholder='დამსაქმებელი' className='ps-3 w-100'/>
                                <p>მინიმუმ 2 სიმბოლო</p>
                            </div>
                            <div className="col-6 w-50">
                                <label>დაწყების რიცხვი</label>
                                <input type="date"  className='ps-3 w-100'/>
                            </div><div className="ps-4 col-6 w-50">
                                <label>დამთავრების რიცხვი</label>
                                <input type="date"  className='ps-3 w-100'/>
                            </div>
                            <div className='col-12 mt-3 about-me-container p-0'>
                                <label className='p-0'>აღწერა</label>
                                <textarea type="text" className='ps-3 about-me-input w-100'
                                          placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'/>
                            </div>
                            <hr className='my-4'/>
                            <div className=''>
                                {Array.from(Array(addedExperience)).map(() => {
                                    return (
                                        <div className='mt-4 row'>
                                            <div className="col-12">
                                                <label>თანამდებობა</label>
                                                <input type="text" placeholder='დეველოპერი, დიზაინერი, ა.შ' className='ps-3 w-100'/>
                                                <p>მინიმუმ 2 სიმბოლო</p>
                                            </div>
                                            <div className="col-12">
                                                <label>დამსაქმებელი</label>
                                                <input type="text" placeholder='დამსაქმებელი' className='ps-3 w-100'/>
                                                <p>მინიმუმ 2 სიმბოლო</p>
                                            </div>
                                            <div className="col-6 w-50">
                                                <label>დაწყების რიცხვი</label>
                                                <input type="date"  className='ps-3 w-100'/>
                                            </div><div className="ps-4 col-6 w-50">
                                            <label>დამთავრების რიცხვი</label>
                                            <input type="date"  className='ps-3 w-100'/>
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
                                <button onClick={ClickAddMoreExperience} className='add-more-experience border-0'><span className='add-more-experience-note'>მეტი გამოცდილების დამატება</span></button>

                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className='button-page-change-container d-flex align-items-end flex-column mb-3'>
                                    <button onClick={ClickPrevious} className='button-page-change border-0 mt-auto'>
                                        <span
                                            className='button-page-change-note'> უკან </span>
                                    </button>
                                </div>
                                <div className='button-page-change-container d-flex align-items-end flex-column mb-3'>
                                    <button onClick={Click} className='button-page-change border-0 mt-auto'>
                                        <span
                                            className='button-page-change-note'> შემდეგი </span>
                                    </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Outlet/>
        </div>

    )
}

export default Experience