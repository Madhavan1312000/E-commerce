import style from "./css/tshirt.module.css"
import { Link } from "react-router-dom"

const Tshirts=()=>{
    return(
        <div>
            <div id={style.maindiv1}>
                <div id={style.d1}>
                    <div className={style.d21}><img src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/r/g/s-cmb-po2-dab-wynk-smartees-original-imagm5vhumtz8epz.jpeg?q=70" alt="" />
                    <h4 id={style.h1}>Men's Typography</h4><h4 id={style.h2}>₹ 450</h4><Link>View</Link>
                   </div>
                    <div className={style.d21}><img src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/i/5/h/s-bg23tsssbk4085-bglore-original-imagn9xczghahg6y.jpeg?q=70" alt="" /><h4 id={style.h1}>Men's Basics</h4><h4 id={style.h2}>₹ 400</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/3/2/s/s-2msk-hood-highrise-original-imagndgtxqyup7qw.jpeg?q=70" alt="" /><h4 id={style.h1}>Collar Type</h4><h4 id={style.h2}>₹ 420</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://rukminim1.flixcart.com/image/612/612/l0e6kcw0/t-shirt/h/g/d/m-half-triangel-black-one-nb-nicky-boy-original-imagc747apzffz5q.jpeg?q=70" alt="" /><h4 id={style.h1}>New Style</h4><h4 id={style.h2}>₹ 550</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/i/b/g/s-half-triangel-black-one-nb-nicky-boy-original-imagmhzyv6b64vfb.jpeg?q=70" alt="" /><h4 id={style.h1}>V Neck Model</h4><h4 id={style.h2}>₹ 470</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/7/v/i/m-st-boxhead-navyblue-smartees-original-imagmg9gcwn9bgww.jpeg?q=70" alt="" /><h4 id={style.h1}>Men's Typography</h4><h4 id={style.h2}>₹ 450</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/h/l/f/3xl-tmrwtrnfull-d69-tripr-original-imagntjxkjuvtuhe.jpeg?q=70" alt="" /><h4 id={style.h1}>Full Hand Type</h4><h4 id={style.h2}>₹ 400</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/m/e/p/xl-oosh0135-oosh-original-imagm73ewuyxh3uf.jpeg?q=70" alt="" /><h4 id={style.h1}>Basics</h4><h4 id={style.h2}>₹ 350</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/i/5/h/s-bg23tsssbk4085-bglore-original-imagn9xczghahg6y.jpeg?q=70" alt="" /><h4 id={style.h1}>Men's Basics</h4><h4 id={style.h2}>₹ 400</h4><Link>View</Link></div>
                    <div className={style.d21}><img src="https://rukminim1.flixcart.com/image/612/612/l0e6kcw0/t-shirt/h/g/d/m-half-triangel-black-one-nb-nicky-boy-original-imagc747apzffz5q.jpeg?q=70" alt="" /><h4 id={style.h1}>New Style</h4><h4 id={style.h2}>₹ 550</h4><Link>View</Link></div>
                </div>
            </div>
        </div>
    )
}
export default Tshirts