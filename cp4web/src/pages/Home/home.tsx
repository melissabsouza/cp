import { Link } from "react-router-dom";
import './home.css'
import NomeEImg from "../components";



const Home = ()=>{
    return(
        <div>
            <div className="menu">
            <h1>Home </h1>
            <h1>
                <Link to= "/Pagina1">Pagina1</Link>
            </h1>
            </div>
            <div className="text">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus repudiandae quae ullam, laudantium eos harum ut nostrum ipsum accusantium aliquid dolorem in, obcaecati magnam dolores cum eaque enim necessitatibus qui!</p>
            </div>

            <NomeEImg
            Nome='Melissa'
            Img='https://th.bing.com/th/id/R.db197cadf38d4731649560829d74ec6f?rik=4i6tPEgvQlAbDQ&pid=ImgRaw&r=0'
            />

        </div>
    )
}

export default Home;