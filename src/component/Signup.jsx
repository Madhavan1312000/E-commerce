import style from "./css/signup.module.css"

const Signup=()=>{
    return(
        <div>
            <div id={style.maindiv}>
                <div id={style.div1}>
                    <table>
                        <tr>
                            <td>NAME</td>
                            <td><input type="text" /></td>
                        </tr>
                        <br />
                        <tr>
                            <td>EMAIL</td>
                            <td><input type="text" name="" id="" /></td>
                        </tr><br />
                        <tr>
                            <td>MOBILE NO</td>
                            <td><input type="text" /></td>
                        </tr><br />
                        <tr>
                            <td>PASSWORD</td>
                            <td><input type="text" /></td>
                        </tr><br />
                        <tr>
                            <td>ADDRESS</td>
                            <td><input type="text" /></td>
                        </tr><br />
                        <tr>
                        <center></center><td  colSpan={2}><button>REGISTER</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Signup