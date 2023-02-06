import React, { useState } from 'react'
import Agenda from './components/Agenda'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '39-44-53256' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter}/>
      <h2>Add a New</h2>
      <PersonForm newName={newName} setNewName={setNewName} newPhone={newPhone}
        setNewPhone={setNewPhone} person={persons} setperson={setPersons} />
      <h2>Numbers</h2>
      <Agenda agenda={persons} filter={newFilter} />
    </div>
  )
}

export default App
