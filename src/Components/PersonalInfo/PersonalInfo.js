import  "../../App.css";
import {Link, Outlet, useNavigate} from "react-router-dom";


const PersonalInfo = () => {
    const history = useNavigate();

    function handleClick() {
        history('/Experience');
    }

    return (
        <div className='cont'>
            <div className='inner-cont'>
                <header>
                    <Link to='/'><img className='Ellipse' src="/images/Ellipse%201.png" alt=""/></Link>
                    <Link to='/ '><img className='Vector' src="/images/Vector.png" alt=""/></Link>
                    <nav className='navbar'>
                        <ul className='nav d-flex'>
                            <li className='page-titles'>პირადი ინფო</li>
                        </ul>
                        <li className='page-number list-unstyled align-self-center'>1/3</li>
                    </nav>

                </header>
                <hr className='personal-info-hr'/>
                <section className='sec-body'>
                    <div className='personal-info-data'>
                        <div className='row'>
                            <div className="ps-0 pe-4 col-6 w-50">
                                <label>სახელი</label>
                                <input type="text" placeholder='ანზორ' className='ps-3 w-100'/>
                                <p>მინიმუმ 2 ასო, ქართული ასოები</p>
                            </div>
                            <div className="ps-4 col-6 w-50">
                                <label>გვარი</label>
                                <input type="text" placeholder='მუმლაძე' className='ps-3 w-100'/>
                                <p>მინიმუმ ორი ასო, ქართული ასოები</p>
                            </div>
                            <div className='id-upload-container p-0'>
                                <label>პირადი ფოტოს ატვირთვა</label>
                                <button className='upload-button border-0 ms-3'><span
                                    className='upload-button-note'> ატვირთვა</span></button>
                            </div>
                            <div className='col-12 my-3 about-me-container p-0'>
                                <label className='p-0'>ჩემ შესახებ (არასავალდებულო)</label>
                                <textarea type="text" className='ps-3 about-me-input w-100'
                                          placeholder='ზოგადი ინფო შენ შესახებ'/>
                            </div>
                            <div className='w-100 col-12 about-me-container p-0'>
                                <label className='p-0'>ელ.ფოსტა</label>
                                <input type="text" className='ps-3 w-100' placeholder='anzor666@redberry.ge'/>
                                <p className='p-0'>უნდა მთავრდებოდეს @redberry.ge-ით</p>
                            </div>
                            <div className='col-12 about-me-container p-0'>
                                <label className='p-0'>მობილურის ნომერი</label>
                                <input type="text" className='ps-3 w-100' placeholder='+995 551 12 34 56'/>
                                <p className='p-0'>უნდა აკმაყოფილებდეს მობილურის ნომრის ფორმატს</p>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className='button-page-change-container d-flex align-items-end flex-column mb-3'>
                        <button onClick={handleClick} className='button-page-change border-0 mt-auto'>
                        <Link to='Experience' className='text-decoration-none'><span
                            className='button-page-change-note'> შემდეგი </span></Link>
                        </button>
                    </div>
                </footer>
            </div>
            <Outlet/>
        </div>

    )
}

export default PersonalInfo