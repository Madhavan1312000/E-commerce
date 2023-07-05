import { useEffect, useState } from "react"
// import data from "../data"
import style from "./css/contact.module.css"
import axios from "axios"
import { Link } from "react-router-dom"

const Contacts=()=>{
    let[datas,setDatas]=useState([])


    useEffect(()=>{
        axios.get("http://localhost:3000/datas")
        .then((r)=>{
            setDatas(r.data)
        })
        .catch(()=>{
            console.log("Error")
        })
    },[])

    return(
        <div>
            <div id={style.maindiv}>
                {datas.map((x)=>{
                    return(
                        <div>
                        <div id={style.d1}>
                            <img src={x.image} alt="" />
                            <h4>{x.name}</h4>
                            <h3>{x.price}</h3>
                           <Link to={`details/${x.id}`}>Add To Cart</Link>
                        </div>
                        </div>
                    )
                    
                })}

            </div>
        </div>
    )
}
export default Contacts