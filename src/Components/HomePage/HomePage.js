import './HomePage.css'
import {Outlet, Link,} from "react-router-dom";

const HomePage = () => {
    return (
        <div className="">
            <div className="">
                <img src="/images/shutterstock_2189773743%201.jpg" className="home-bg" alt=""/>
            </div>

            <header className="container">
                <div className="logo">
                    <img src="/images/redberrylogo.png" className="logo pt-4" alt=""/>
                </div>
                <div className="">
                    <hr/>
                </div>
            </header>
            <section>
                <div className="d-flex justify-content-center">
                    <img className="stamp position-absolute" src="/images/RedBerry.png" alt=""/>
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