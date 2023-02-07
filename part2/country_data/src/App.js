import React, { useEffect, useState } from 'react'
import Searching from './components/Searching'
import Paises from './components/Paises'
function App() {
  const [search, setSearch] = useState('')
  const [paises, setPaises] = useState([])
  return (
    <>
    <Searching search={search} setSearch={setSearch}/>
    <Paises paises={paises} setPaises={setPaises} search={search}/>
    </>
  );
}

export default App;
