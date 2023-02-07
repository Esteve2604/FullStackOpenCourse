import React, { useEffect, useState } from 'react'
import Searching from './components/Searching'
function App() {
  const [search, setSearch] = useState([])
  return (
    <>
    <Searching search={search} setSearch={setSearch}/>
    </>
  );
}

export default App;
