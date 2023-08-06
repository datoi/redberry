import "../../App.css";
import {Link, Outlet, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import RunTimeResume from "../RunTimeResume/RunTimeResume";


const PersonalInfo = ({formData, onInputChange, refreshClick}) => {
    const history = useNavigate();

    function handleClick() {
        if(validationErrors.length === 0){
            history('/Experience')
        } else {
            history(null);
        }
    }

    const [formDataState, setFormDataState] = useState(formData);
    const [validationErrors, setValidationErrors] = useState([]);
    const reader = new FileReader();
    const handleImageChange = (e) => {
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (e) => {
            setFormDataState({ ...formDataState, image: e.target.result });
            localStorage.setItem('formData', JSON.stringify(formDataState));
        };
    };

    useEffect(() => {
        setFormDataState(formData);

        for (const name in formData) {
            if (formData[name].length > 0) {
                validate(name, formData[name]);
            }
        }
    }, [formData]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        formDataState[name] = value;
        onInputChange(formDataState);
        validate(name, value);
    }



    const Mobile = /^\+995\d{9}$/;
    const Email = /^[^\s@]+@redberry\.ge$/;
    const reGeorgianLetters = /^[ა-ჰ]+$/;

    const validationConditions = {
        name: {
            condition: (value) => value.length <= 1 || !reGeorgianLetters.test(value),
        },
        surname: {
            condition: (value) => value.length <= 1 || !reGeorgianLetters.test(value),
        },
        email: {
            condition: (value) => !Email.test(value),
        },
        phone_number: {
            condition: (value) => !Mobile.test(value),
        },
    };

    const validate = (name, value) => {
        if (validationConditions[name]?.condition(value)) {
            if (validationErrors.indexOf(name) === -1) {
                setValidationErrors((values) => [...values, name]);
            }
        } else {
            if (validationErrors.indexOf(name) > -1) {
                setValidationErrors((values) => values.filter((item) => item !== name));
            }
        }
    };




    const handleImageClick = () => {
        document.getElementById('imageBtn').click();
    }

    return (

        <div className='cont d-flex'>
            <div className='refresh-button'>
                <Link onClick={refreshClick} to='/'><img className='Ellipse' src="/images/Ellipse%201.png" alt=""/><img className='Vector' src="/images/Vector.png" alt=""/></Link>
            </div>
            <div className='inner-cont'>
                <div>
                    <nav className='navbar'>
                        <ul className='nav d-flex'>
                            <li className='page-titles'>პირადი ინფო</li>
                        </ul>
                        <li className='page-number list-unstyled align-self-center'>1/3</li>
                    </nav>
                </div>
                <hr className='hr'/>
                <div className='sec-body'>
                    <div className='personal-info-data'>
                        <div className='row'>
                            <div className="ps-0 pe-4 col-6 w-50">
                                <label>სახელი</label>
                                <input type="text" name="name" value={formDataState.name} onChange={handleChange}
                                       placeholder='ანზორ' className={`ps-3 w-100   ${validationErrors.indexOf('name') === -1 && formDataState.name.length > 0 ? "border-success success validation-icon" : ""} ${validationErrors.indexOf('name') > -1 ? "error-icon border-danger danger" : ""} `}/>
                                <p className='validation-texts'>მინიმუმ 2 ასო, ქართული ასოები</p>
                            </div>
                            <div className="ps-4 col-6 w-50">
                                <label>გვარი</label>
                                <input type="text" name="surname" value={formDataState.surname} onChange={handleChange}
                                       placeholder='მუმლაძე' className={`ps-3 w-100   ${validationErrors.indexOf('surname') === -1 && formDataState.surname.length > 0 ? "border-success success validation-icon" : ""} ${validationErrors.indexOf('surname') > -1 ? "error-icon border-danger danger" : ""}`}/>
                                <p className='validation-texts'>მინიმუმ ორი ასო, ქართული ასოები</p>
                            </div>
                            <div className='d-flex mt-3'>
                                <label >პირადი ფოტოს ატვირთვა</label>
                                <button className="upload-button border-0 ms-4" onClick={handleImageClick}>ატვირთვა</button>
                                <input id="imageBtn" type="file" className='d-none upload-button'  onChange={handleImageChange} />
                            </div>
                            <div className='col-12 mt-3 about-me-container p-0'>
                                <label  className='p-0'>ჩემ შესახებ (არასავალდებულო)</label>
                                <textarea name='about_me' value={formDataState.about_me} onChange={handleChange} className='ps-3 about-me-input w-100'
                                          placeholder='ზოგადი ინფო შენ შესახებ'/>
                            </div>
                            <div className='w-100 col-12 mt-3 about-me-container p-0'>
                                <label className='p-0'>ელ.ფოსტა</label>
                                <input type="text" name='email' value={formDataState.email} onChange={handleChange}
                                       className={`ps-3 w-100  ${validationErrors.indexOf('email') === -1 && formDataState.email.length > 0 ? "border-success success validation-icon" : ""} ${validationErrors.indexOf('email') > -1 ? "error-icon border-danger danger" : ""} `} placeholder='anzor666@redberry.ge'/>
                                <p className='validation-texts'>უნდა მთავრდებოდეს @redberry.ge-ით</p>
                            </div>
                            <div className='col-12 about-me-container mt-3 p-0'>
                                <label className='p-0'>მობილურის ნომერი</label>
                                <input type="text" name='phone_number' value={formDataState.phone_number}
                                       onChange={handleChange} className={`ps-3 w-100 ${validationErrors.indexOf('phone_number') === -1 && formDataState.phone_number.length > 0 ? "border-success success validation-icon" : ""} ${validationErrors.indexOf('phone_number') > -1 ? "error-icon border-danger danger" : ""} `} placeholder='+995 551 12 34 56' />
                                <p className='validation-texts'>უნდა აკმაყოფილებდეს მობილურის ნომრის ფორმატს</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='button-page-change-container d-flex align-items-end flex-column mt-auto'>
                    <button onClick={handleClick} disabled={validationErrors.length > 0} className='button-page-change border-0 mt-auto'>
                        <span
                            className='button-page-change-note'> შემდეგი </span>
                    </button>
                </div>
            </div>
            <RunTimeResume formData={formData}/>
            <Outlet/>
        </div>

    )
}

export default PersonalInfo