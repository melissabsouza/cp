import './style.css'

type nomeEImg = {
    Nome: string;
    Img: string;

}

const NomeEImg = ({Nome, Img} : nomeEImg) => {
    return (
        <div>
            <div className='infos'>
            <img src={Img} />
            <h1>{Nome}</h1>
            </div>
        </div>
    )
}

export default NomeEImg;