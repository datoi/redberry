import HomePage from "./Components/HomePage/HomePage";
import PersonalInfo from "./Components/PersonalInfo/PersonalInfo";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Finished from "./Components/Finished/Finished";



function App() {



    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path='PersonalInfo' element={<PersonalInfo/>}></Route>
                <Route path='Experience' element={<Experience />}></Route>
                <Route path='Education' element={<Education/>}></Route>
                <Route path='Finished' element={<Finished/>}></Route>

            </Routes>
        </BrowserRouter>

    )

}

export default App
