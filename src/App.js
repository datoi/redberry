import HomePage from './Components/HomePage/HomePage';
import PersonalInfo from './Components/PersonalInfo/PersonalInfo';
import {HashRouter, Route, Routes} from 'react-router-dom';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Finished from './Components/Finished/Finished';
import {Component} from 'react';
import RunTimeResume from "./Components/RunTimeResume/RunTimeResume";

class App extends Component {


    constructor() {
        super();

        this.state = {
            formData: {
                name: '',
                surname: '',
                email: '',
                phone_number: ''
            ,
            experiences: [{
                position: '',
                employer: '',
                start_date: '',
                due_date: '',
                description: ''
            }],
            educations: [{
                institute: '',
                degree_id: '',
                due_date: '',
                description: ''
            }],
            image: '',
            about_me: ''
        }
    }
    }
    componentDidMount = () => {
        if (localStorage.getItem('formData')) {
            const formData = JSON.parse(localStorage.getItem('formData'));
            this.setState({formData: formData});
        }
    }

    handleFormDataChange = event => {
        this.setState({formData: event});
        localStorage.setItem('formData', JSON.stringify(event));
    };

    refreshClick() {
        localStorage.removeItem("formData");
        window.location.refresh();
    }

    render() {


        return (
            <HashRouter>
                <Routes>
                    <Route element={<RunTimeResume formData={this.state.formData}/>}></Route>
                    <Route path='/' element={<HomePage/>}></Route>
                    <Route path='PersonalInfo'
                           element={<PersonalInfo refreshClick={this.refreshClick} formData={this.state.formData}
                                                  onInputChange={this.handleFormDataChange}/>}></Route>
                    <Route path='Experience'
                           element={<Experience refreshClick={this.refreshClick} formData={this.state.formData}
                                                onInputChange={this.handleFormDataChange}/>}></Route>
                    <Route path='Education'
                           element={<Education refreshClick={this.refreshClick} formData={this.state.formData}
                                               onInputChange={this.handleFormDataChange}/>}></Route>
                    <Route path='Finished' element={<Finished refreshClick={this.refreshClick}
                                                              formData={this.state.formData}/>}></Route>

                </Routes>
            </HashRouter>

        )
    }


}

export default App
