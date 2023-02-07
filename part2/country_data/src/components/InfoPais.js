import axios from 'axios'
const InfoPais = ({ pais }) => {
    debugger
    console.log(pais);
    return (
    <div>
        <h1>{pais.name.common}</h1>
        <p> capital {pais.capital[0]}
        population {pais.population}
        </p>
        <h3>languages</h3>
        <ul>
           
        </ul>
        <img>{pais.flags.png}</img>
    </div>
    )
}
export default InfoPais