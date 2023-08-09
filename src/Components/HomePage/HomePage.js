import './HomePage.css'
import {Outlet, Link,} from "react-router-dom";
import logo from '../../images/redberrylogo.png';
import bg from '../../images/shutterstock_2189773743 1.jpg';
import stamp from '../../images/RedBerry.png'
const HomePage = () => {
    return (
        <div className="">
            <div className="">
                <img src={bg} className="home-bg" alt=""/>
            </div>

            <header className="container">
                <div className="logo">
                    <img src={logo} className="logo pt-4" alt=""/>
                </div>
                <div className="">
                    <hr/>
                </div>
            </header>
            <section>
                <div className="d-flex justify-content-center">
                    <img className="stamp position-absolute" src={stamp} alt=""/>
                </div>
                <div className="button-container d-flex justify-content-center">
                    <Link to='PersonalInfo' className="resume-button text-decoration-none"><span
                        className='button-note'>რეზიუმეს დამატება</span></Link>
                </div>
            </section>
            <Outlet/>
        </div>


    )
}
export default HomePage;