import {Link, Outlet, useNavigate} from "react-router-dom";
import "../../App.css";
import {useEffect, useState} from "react";
import RunTimeResume from "../RunTimeResume/RunTimeResume";

const Experience = ({formData, onInputChange, refreshClick}) => {
    const history = useNavigate();

    function Click() {
        if (validationErrors.length === 0){
        history('/Education');
        } else {
            history(null)
        }

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
    const [validationErrors, setValidationErrors] = useState([]);


    useEffect(() => {
        for (const position in formData) {
            if (formData[position].length > 0) {
                validate(position, formData[position]);
            }
        }
        setFormDataState(formData);
    }, [formData]);

    const validate = (input, value) => {
        switch (input) {
            case 'position':
                if (value.length < 2 && validationErrors.indexOf(input) === -1) {
                    setValidationErrors(values => (
                        [...values, input]
                    ))
                } else if (validationErrors.indexOf(input) > -1) {
                    setValidationErrors(values => values.splice(values.indexOf(input), 1));
                }
                break;
            case 'employer':
                if (value.length < 2 && validationErrors.indexOf(input) === -1) {
                    setValidationErrors(values => (
                        [...values, input]
                    ))
                } else if (validationErrors.indexOf(input) > -1) {
                    setValidationErrors(values => values.splice(values.indexOf(input), 1));
                }
                break;
            case 'start_date':
                if (value.length < 1 && validationErrors.indexOf(input) === -1) {
                    setValidationErrors(values => (
                        [...values, input]
                    ))
                } else if (validationErrors.indexOf(input) > -1) {
                    setValidationErrors(values => values.splice(values.indexOf(input), 1));
                }
                break;
            case 'end_date':
                if (value.length < 1 && validationErrors.indexOf(input) === -1) {
                    setValidationErrors(values => (
                        [...values, input]
                    ))
                } else if (validationErrors.indexOf(input) > -1) {
                    setValidationErrors(values => values.splice(values.indexOf(input), 1));
                }
                break;
            case 'description':
                if (value.length < 1 && validationErrors.indexOf(input) === -1) {
                    setValidationErrors(values => (
                        [...values, input]
                    ))
                } else if (validationErrors.indexOf(input) > -1) {
                    setValidationErrors(values => values.splice(values.indexOf(input), 1));
                }
                break;

        }
    }

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
        formDataState[name] = value;

        formDataState.experiences = result;
        onInputChange(formDataState);
        validate(name, value);
    };

    const handleAddMoreExperience = () => {
        const experiences = formDataState.experiences;
        experiences.push(emptyExperienceObject);
        setFormDataState(values => (
            {...values, experiences: experiences}
        ))
    }


    return (
        <div className='cont d-flex'>
            <div className='refresh-button'>
                <Link onClick={refreshClick} to='/'><img className='Ellipse' src="/images/Ellipse%201.png" alt=""/><img className='Vector' src="/images/Vector.png" alt=""/></Link>
            </div>
            <div className='inner-cont'>
                <div className=''>
                    <nav className='navbar'>
                        <ul className='nav d-flex'>
                            <li className='page-titles'>გამოცდილება</li>
                        </ul>
                        <li className='page-number list-unstyled align-self-center'>2/3</li>
                    </nav>
                </div>
                <hr className='hr mb-3'/>
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
                                               placeholder='დეველოპერი, დიზაინერი, ა.შ' className={`ps-3 w-100  ${validationErrors.indexOf('position') === -1 && item.position.length > 0 ? "validation-icon border-success success" : ""} ${validationErrors.indexOf('position') > -1 ? "error-icon border-danger danger" : ""}`}/>
                                        <p className='validation-texts'>მინიმუმ 2 სიმბოლო</p>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <label>დამსაქმებელი</label>
                                        <input type="text"
                                               name="employer"
                                               value={item.employer}
                                               onChange={(e) => handleChange(e, index)}
                                               placeholder='დამსაქმებელი' className={`ps-3 w-100  ${validationErrors.indexOf('employer') === -1 && item.employer.length > 0 ? "border-success success validation-icon" : ""} ${validationErrors.indexOf('employer') > -1 ? "error-icon border-danger danger" : ""}`}/>
                                        <p className='validation-texts'>მინიმუმ 2 სიმბოლო</p>
                                    </div>
                                    <div className="col-6  w-50">
                                        <label>დაწყების რიცხვი</label>
                                        <input name="start_date"
                                               type="date"
                                               value={item.start_date}
                                               onChange={(e) => handleChange(e, index)}
                                               className={`ps-3 w-100  ${validationErrors.indexOf('start_date') === -1 && item.start_date.length > 0 ? "border-success success" : ""} ${validationErrors.indexOf('start_date') > -1 ? "border-danger danger" : ""}`}/>
                                    </div>
                                    <div className="ps-4 col-6  w-50">
                                        <label>დამთავრების რიცხვი</label>
                                        <input type="date" name='due_date'
                                               value={item.due_date}
                                               onChange={(e) => handleChange(e, index)}
                                               className={`ps-3 w-100  ${validationErrors.indexOf('due_date') === -1 && item.due_date.length > 0 ? "border-success success" : ""} ${validationErrors.indexOf('due_data') > -1 ? "border-danger danger" : ""}`}/>
                                    </div>
                                    <div className='col-12 mt-3 about-me-container p-0'>
                                        <label className='p-0'>აღწერა</label>
                                        <textarea
                                            className={`ps-3 about-me-input w-100  ${validationErrors.indexOf('description') === -1 && item.description.length > 0 ? "border-success success validation-icon" : ""} ${validationErrors.indexOf('description') > -1 ? "error-icon border-danger danger" : ""}`}
                                                  placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'
                                                  name='description'
                                                  value={item.description}
                                                  onChange={(e) => handleChange(e, index)}/>
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
                        <span
                            className='button-page-change-note'> უკან </span>
                    </button>
                    <button onClick={Click} disabled={validationErrors.length > 0} className='button-page-change border-0 mt-auto'>
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

export default Experience