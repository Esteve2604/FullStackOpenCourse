import FilterbyName from "./FilterbyName"

const Agenda = ({ agenda , filter}) => {
    if(filter.localeCompare('')!=0){
        return (<>
        <FilterbyName agenda={agenda} filter={filter} />
        </>)
    }
    return (<>
        {agenda.map(nombre => (<pre key={nombre.name}> {nombre.name} {nombre.number}</pre>))}
    </>)
}
export default Agenda