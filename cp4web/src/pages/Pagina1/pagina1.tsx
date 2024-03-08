import { Link } from "react-router-dom";
import './pagina1.css'

const Pagina1 = ()=>{
    return(
        <div>
            <div className="menu">
            <h1>
                <Link to= "/">Home</Link>
            </h1>
            <h1> Pagina1</h1>
            </div>
            <div className="texto">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus repudiandae quae ullam, laudantium eos harum ut nostrum ipsum accusantium aliquid dolorem in, obcaecati magnam dolores cum eaque enim necessitatibus qui!</p>
            </div>

        </div>
    )
}

export default Pagina1;