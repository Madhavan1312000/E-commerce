import style from "./css/login.module.css"
import { Link } from "react-router-dom"

const Login=()=>{
    return(
<div>
    
        <div id={style.maindiv3}>
            
            <div id={style.m1}>
            <Link to="/home"><i class="fa-sharp fa-solid fa-circle-xmark" id={style.x}></i></Link>
            <div id={style.d1}>
                <div>
                {/* <label htmlFor="" id={style.l1}>EMAIL</label> */}
                <br /><i class="fa-solid fa-envelope" id={style.ii1}></i><input type="text" placeholder="Email"/>
                <br /><br />
                {/* <label htmlFor="" id={style.l2}>PASSWORD</label> */}
                <br /><i class="fa-solid fa-key" id={style.ii2}></i><input type="text" placeholder="Password"/><br /><br />
                <br /><button>Login</button>
                <br /><br />
                <p>---------- or Sign up with ----------</p>
                <br />
                <a href="https://myaccount.google.com/"><i class="fa-brands fa-google" id={style.i1}></i></a>
                <a href="https://www.facebook.com/login/"><i class="fa-brands fa-square-facebook" id={style.i2}></i></a>
                </div>
            </div>
            <div id={style.d2}>
                <img src="https://img.freepik.com/free-vector/handsome-young-man-showing-hand-signal_1308-41562.jpg?size=626&ext=jpg&ga=GA1.1.1158682593.1687979719&semt=ais" alt="" />
            </div>
        </div>
        </div>
        
</div>
    )
}
export default Login
