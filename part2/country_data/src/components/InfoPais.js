import axios from 'axios'
const InfoPais = (props) => {
    console.log(props.paises.name.common)
    return (
        <>
            <h1>{props.paises.name.common}</h1>
            <p> capital {props.paises.capital[0]} <br></br>
                population {props.paises.population}
            </p>
            <h3>languages</h3>
            <ul>

            </ul>
            <img src={props.paises.flags.png}></img>
        </>

    )
}
export default InfoPais