// import { useEffect, useState } from "react"
import style from "./css/cap.module.css"
// import style from "./css2/cap.module.css"
import { Link } from "react-router-dom"
// import axios from "axios"

const Caps=()=>{
    // let[datas,setDatas]=useState([])

    // useEffect(()=>{
    //     axios.get("http://localhost:3000/caps")
    //     .then((r)=>{
    //         setDatas(r.data)
    //     })
    // },[])

    return(
        <div>
            <div id={style.maindiv1}>
            <div id={style.d1}>
                {/* {datas.map((x)=>{
                    return(
                        <div>
                            <div className={style.d21}><img src={x.image} alt="" /><h4 id={style.h1}>{x.name}</h4><h4 id={style.h2}>{x.price}</h4><Link>View</Link></div>
                        </div>
                    )

                })} */}
                    <div className={style.d21}><img src="https://rukminim1.flixcart.com/image/612/612/xif0q/cap/n/y/q/free-sty-22-23-001277-nasa-by-free-authority-original-imagghg3gu7epa6h.jpeg?q=70" alt="" /><h4 id={style.h1}>Men's Typography</h4><h4 id={style.h2}>₹ 450</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://rukminim1.flixcart.com/image/612/612/xif0q/cap/k/t/q/free-farrari-polo-store-original-imagnuvn8ce9sv9n.jpeg?q=70" alt="" /><h4 id={style.h1}>Men's Typography</h4><h4 id={style.h2}>₹ 450</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://rukminim1.flixcart.com/image/612/612/xif0q/cap/w/p/k/free-black-white1virat-dedicated-original-imagzgkw87hhx4ky.jpeg?q=70" alt="" /><h4 id={style.h1}>Men's Typography</h4><h4 id={style.h2}>₹ 450</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://rukminim1.flixcart.com/image/612/612/cap/g/f/k/free-beanie-025-bsquare-original-imaeqauywkhrgysu.jpeg?q=70" alt="" /><h4 id={style.h1}>Men's Typography</h4><h4 id={style.h2}>₹ 450</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://rukminim1.flixcart.com/image/612/612/jl2m7ww0/cap/e/s/y/free-net-sunshade-combo-zacharias-original-imaf8aa462augepc.jpeg?q=70" alt="" /><h4 id={style.h1}>Men's Typography</h4><h4 id={style.h2}>₹ 450</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://rukminim1.flixcart.com/image/612/612/kxm5qq80/cap/0/b/s/free-solid-round-cap-nmt-original-imagayxj6ardhsue.jpeg?q=70" alt="" /><h4 id={style.h1}>Men's Typography</h4><h4 id={style.h2}>₹ 450</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://rukminim1.flixcart.com/image/612/612/jnkmykw0/cap/h/k/n/free-snapback-baseball-hip-hop-cap-westery-original-imafa8khgchpghtx.jpeg?q=70" alt="" /><h4 id={style.h1}>Men's Typography</h4><h4 id={style.h2}>₹ 450</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://rukminim1.flixcart.com/image/612/612/kjom6q80-0/cap/j/y/y/free-mint-darkgrey-zipper-g-original-imafz6zhdxpzxbsa.jpeg?q=70" alt="" /><h4 id={style.h1}>Men's Typography</h4><h4 id={style.h2}>₹ 450</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://rukminim1.flixcart.com/image/612/612/xif0q/cap/n/y/q/free-sty-22-23-001277-nasa-by-free-authority-original-imagghg3gu7epa6h.jpeg?q=70" alt="" /><h4 id={style.h1}>Men's Typography</h4><h4 id={style.h2}>₹ 450</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://rukminim1.flixcart.com/image/612/612/kxm5qq80/cap/0/b/s/free-solid-round-cap-nmt-original-imagayxj6ardhsue.jpeg?q=70" alt="" /><h4 id={style.h1}>Men's Typography</h4><h4 id={style.h2}>₹ 450</h4><Link>View</Link></div>
                </div>
            </div>
        // </div>
    )
}
export default Caps