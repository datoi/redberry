import {Link, Outlet, useNavigate} from "react-router-dom";
import "../../App.css";
import {useState} from "react";

const Education = () => {
    const history = useNavigate();


    function Click() {
        history('/Finished');
    }

    function ClickPrevious() {
        history('/Experience');
    }

    const [addedEducation, setNewEducation] = useState(0);

    const ClickAddMoreEducation = () => {
        setNewEducation(addedEducation + 1);
    }

    return (
        <div className='cont'>
            <div className='inner-cont'>
                <header>
                    <Link to='/'><img className='Ellipse' src="/images/Ellipse%201.png" alt=""/></Link>
                    <Link to='/'><img className='Vector' src="/images/Vector.png" alt=""/></Link>
                    <nav className='navbar'>
                        <ul className='nav d-flex'>

                            <li className='page-titles'>განათლება</li>
                        </ul>
                        <li className='page-number list-unstyled align-self-center'>3/3</li>
                    </nav>

                </header>
                <hr className='personal-info-hr'/>
                <section className='sec-body'>
                    <div className='personal-info-data'>
                        <div className='row'>
                            <div className="col-12">
                                <label>სასწავლებელი</label>
                                <input type='' placeholder='სასწავლებელი' className='ps-3 w-100'/>
                                <p>მინიმუმ 2 სიმბოლო</p>
                            </div>
                            <div className="input-group d-block col-6 w-50">
                                <label >ხარისხი</label>
                                <select className="form-select w-100" id="select-degree"
                                        aria-label="Example select with button addon">
                                    <option selected>აირჩიეთ ხარისხი</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="ps-4 col-6 w-50">
                                <label>დამთავრების რიცხვი</label>
                                <input type="date" className='ps-3 w-100'/>
                            </div>
                            <div className='col-12 mt-3 about-me-container p-0'>
                                <label className='p-0'>აღწერა</label>
                                <textarea type="text" className='ps-3 about-me-input w-100'
                                          placeholder='განათლების აღწერა'/>
                            </div>
                            <hr className='my-4'/>
                            <div className=''>
                                {Array.from(Array(addedEducation)).map(() => {
                                    return (
                                        <div className='row mt-4'>
                                            <div className="col-12">
                                                <label>სასწავლებელი</label>
                                                <input type='' placeholder='სასწავლებელი' className='ps-3 w-100'/>
                                                <p>მინიმუმ 2 სიმბოლო</p>
                                            </div>
                                            <div className="input-group d-block col-6 w-50">
                                                <label >ხარისხი</label>
                                                <select className="form-select w-100" id="select-degree"
                                                        aria-label="Example select with button addon">
                                                    <option selected>აირჩიეთ ხარისხი</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div className="ps-4 col-6 w-50">
                                                <label>დამთავრების რიცხვი</label>
                                                <input type="date" className='ps-3 w-100'/>
                                            </div>
                                            <div className='col-12 mt-3 about-me-container p-0'>
                                                <label className='p-0'>აღწერა</label>
                                                <textarea type="text" className='ps-3 about-me-input w-100'
                                                          placeholder='განათლების აღწერა'/>
                                            </div>
                                            <hr className='my-4'/>
                                        </div>
                                    )
                                })}
                                <button onClick={ClickAddMoreEducation} className='add-more-experience border-0'><span
                                    className='add-more-experience-note'>სხვა სასწავლებლის დამატება</span></button>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className='button-page-change-container d-flex align-items-end flex-column mb-3'>
                                    <button onClick={ClickPrevious}
                                            className='button-page-change border-0 mt-auto'>
                                        <Link to='PersonalInfo' className='text-decoration-none'><span
                                            className='button-page-change-note'> უკან </span></Link>
                                    </button>
                                </div>
                                <div className='button-page-change-container d-flex align-items-end flex-column mb-3'>
                                    <button onClick={Click} className='button-page-change border-0 mt-auto'>
                                        <Link to='Finished' className='text-decoration-none'><span
                                            className='button-page-change-note'> დასრულება </span></Link>
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

export default Education