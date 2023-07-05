import Ecomm from "./component/Ecomm"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Tshirts from "./component/Tshirts"
import Pants from "./component/Pants"
import Caps from "./component/Caps"
import Chains from "./component/Chains"
import Shoes from "./component/Shoes"
import Watches from "./component/Watches"
import Inners from "./component/Inners"
import Hoodies from "./component/Hoodies"
import Home from "./component/Home"
import Login from "./component/Login"
import Signup from "./component/Signup"
// import Cart from "./component/Details"
import Details from "./component/Details"
import Contacts from "./component/Contacts"
import Section1 from "./component/Section1"

const App=()=>{
    return(
        <div>
            
            <BrowserRouter>
            <Ecomm/>
            <Routes>
                <Route path="/tshirts" element={<Tshirts/>}></Route>
                <Route path="/pants" element={<Pants/>}></Route>
                <Route path="/shoes" element={<Shoes/>}></Route> 
                <Route path="/chains" element={<Chains/>}></Route>
                <Route path="/caps" element={<Caps/>}></Route>
                <Route path="/hoodies" element={<Hoodies/>}></Route> 
                <Route path="/inners" element={<Inners/>}></Route>
                <Route path="/watches" element={<Watches/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/datas" element={<Contacts/>}></Route>
                {/* <Route path="/contacts" element={<Contacts/>}></Route> */}
                {/* <Route path='/details/:index' element={<Details/>}></Route> */}
            </Routes>
            <Home></Home>
            <Section1></Section1>
            </BrowserRouter>
        </div>
    )
}
export default App