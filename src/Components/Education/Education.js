import {Link, Outlet, useNavigate} from "react-router-dom";
import "../../App.css";
import {useCallback, useEffect, useState} from "react";
import RunTimeResume from "../RunTimeResume/RunTimeResume";
import axios from "axios";

const Education = ({refreshClick, formData, onInputChange}) => {
    const [degrees, setDegrees] = useState([]);


    useEffect(() => {
        fetch("https://resume.redberryinternship.ge/api/degrees")
            .then(response => response.json())
            .then(responseData => {
                setDegrees(responseData);
            });
    }, []);
    const history = useNavigate();

    const buildFormData = (formData, data, parentKey) => {
        if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
            Object.keys(data).forEach(key => {
                buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
            });
        } else {
            const value = data == null ? '' : data;

            formData.append(parentKey, value);
        }

        return formData;
    }
    const Click = async (e) => {
        if (validationErrors.length === 0){
            history('/Finished');
        } else {
            history(null)
        }
        if (validate)
            if (validationErrors.length > 0) {
                return;
            }

        const base64Response = await fetch(formData.image);
        const blob = await base64Response.blob();
        const data = buildFormData(new FormData(), formData);
        data.append('image', blob)

        axios.post('https://resume.redberryinternship.ge/api/cvs', data, {
            "Content-Type": "multipart/form-data",
        })
            .then((data) => console.log(data))
            .catch((err) => console.error(err));
    }

    function ClickPrevious() {
        history('/Experience');
    }

    const emptyEducationObject = {
        institute: '',
        degree_id: '',
        due_date: '',
        description: '',

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
        const validationConditions = {
            institute: {
                condition: value.length < 2,
            },
            degree_id: {
                condition: value === '',
            },
            due_date: {
                condition: value.length < 2,
            },
            description: {
                condition: value.length < 2,
            },
        };

        if (validationConditions[input]?.condition) {
            if (validationErrors.indexOf(input) === -1) {
                setValidationErrors((values) => [...values, input]);
            }
        } else {
            if (validationErrors.indexOf(input) > -1) {
                setValidationErrors((values) => values.filter((item) => item !== input));
            }
        }
    };


    const handleChange = (e, index) => {
        const name = e.target.name;
        const value = e.target.value;

        const result = formDataState.educations.map((item, i) => {
            if (i === index) {
                return {
                    ...item,
                    [name]: value
                };
            }
            return item;
        });
        formDataState[name] = value;
        formDataState.educations = result;
        onInputChange(formDataState);
        validate(name, value);

    };
    const handleAddMoreEducation = () => {
        const educations = formDataState.educations;
        educations.push(emptyEducationObject);
        setFormDataState(values => (
            {...values, educations: educations}
        ))
    }
    return (
        <div className='cont d-flex'>
            <div className='refresh-button'>
                <Link onClick={refreshClick} to='/'><img className='Ellipse' src="/images/Ellipse%201.png" alt=""/><img
                    className='Vector' src="/images/Vector.png" alt=""/></Link>

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
                <hr className='hr mb-3'/>
                <div className='sec-body'>
                    <div className='personal-info-data'>
                        {Array.from(formDataState.educations).map((item, index) => {
                            return (
                                <div key={index} className='row'>
                                    <div className='mb-3'>
                                        <label>სასწავლებელი</label>
                                        <input type='text' name='institute'
                                               value={item.institute}
                                               onChange={(e) => handleChange(e, index)}
                                               placeholder='სასწავლებელი'
                                               className={`ps-3 w-100  ${validationErrors.indexOf('institute') === -1 && item.institute.length > 0 ? "validation-icon border-success success" : ""} ${validationErrors.indexOf('institute') > -1 ? "error-icon border-danger danger" : ""}`}/>
                                        <p className='validation-texts'>მინიმუმ 2 სიმბოლო</p>
                                    </div>

                                    <div className="input-group d-block col-6 w-50 mb-3">
                                        <label>ხარისხი</label>
                                        <select
                                            name='degree_id'
                                            value={item.degree_id}
                                            onChange={(e) => handleChange(e, index)}
                                            className={`form-select w-100 ${validationErrors.indexOf('degree_id') === -1 && item.degree_id.length > 0 ? "validation-icon border-success success" : ""} ${validationErrors.indexOf('degree_id') > -1 ? "error-icon border-danger danger" : ""}"`}
                                            id="">
                                            <option value=''>აირჩიეთ ხარისხი</option>
                                            {degrees.map(degree => (
                                                <option
                                                    key={degree.id} value={degree.id}>{degree.title}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="ps-4 col-6 w-50">
                                        <label>დამთავრების რიცხვი</label>
                                        <input type="date" name='due_date'
                                               value={item.due_date}
                                               onChange={(e) => handleChange(e, index)}
                                               className={`ps-3 w-100 ${validationErrors.indexOf('due_date') === -1 && item.due_date.length > 0 ? "border-success success" : ""} ${validationErrors.indexOf('due_date') > -1 ? "border-danger danger" : ""}"`}
                                               id=""/>

                                    </div>
                                    <div className='col-12 mb-3 about-me-container p-0'>
                                        <label className='p-0'>აღწერა</label>
                                        <textarea name='description'
                                                  value={item.description}
                                                  onChange={(e) => handleChange(e, index)}
                                                  className={`ps-3 about-me-input w-100 ${validationErrors.indexOf('description') === -1 && item.description.length > 0 ? "border-success success" : ""} ${validationErrors.indexOf('description') > -1 ? "border-danger danger" : ""}"`}
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
                <div className='button-page-change-container d-flex justify-content-between mt-auto'>
                    <button onClick={ClickPrevious} className='button-page-change border-0 mt-auto'>
                        <span
                            className='button-page-change-note'> უკან </span>
                    </button>
                    <button onClick={Click} disabled={validationErrors.length > 0}
                            className='button-page-change border-0 mt-auto'>
                        <span
                            className='button-page-change-note'> დასრულება </span>
                    </button>
                </div>
            </div>
            <RunTimeResume formData={formData}/>
            <Outlet/>
        </div>

    )
}

export default Education