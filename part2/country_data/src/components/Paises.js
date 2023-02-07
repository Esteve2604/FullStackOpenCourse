import axios from 'axios'
import { useEffect } from 'react';
import InfoPais from './InfoPais';
const Paises = ({ paises, setPaises, search }) => {
    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${search}`).then(response => { setPaises(response.data) })
    }, [search])
    if (paises.length > 11) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    } else if (paises.length === 1){
        console.log(paises[0]);
        return <InfoPais paises={paises[0]}/>
    }
    return (
        <div>
            {paises.map(pais => (<pre key={pais.name.common}> {pais.name.common}</pre>))}
        </div>
    )
}
export default Paises