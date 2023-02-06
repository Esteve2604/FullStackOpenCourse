const PersonForm = ({newName, setNewName, newPhone,
    setNewPhone, persons, setPersons}) => {
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
    }
    const addPerson = (event) => {
        event.preventDefault()
        if (AddedPerson()) {
            const person = { name: newName, phone: newPhone }
            setPersons(persons.concat(person))
        } else {
            alert(`${newName} is already added to phonebook`)
        }
    }
    const AddedPerson = () => {
        const nom = persons.filter(nombre => newName.localeCompare(nombre.name) === 0)
        return nom.length === 0
    }
    return (
        <form onSubmit={addPerson}>
            <div>
                Name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                Number: <input value={newPhone} onChange={handlePhoneChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}
export default PersonForm