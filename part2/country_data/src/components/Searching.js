const Searching = ({search, setNewSearch}) => {
    const handleNewSearch = ({value}) => {
        setNewSearch(value)
    }
    return ( 
    <div>
       find countries: <input value={search} onChange={handleNewSearch} />
    </div>
    )
}
export default Searching