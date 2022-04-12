import './App.css';
import Pag1 from './views/Pag1';
import Pag2 from './views/Pag2';
import { useState } from 'react';

function App() {

  const [ currentView, setCurrentView ] = useState(undefined)

  return (
    <>
      <h1>Bases paginación</h1>
      <button onClick={()=>{setCurrentView(Pag1)}}>Páxina 1</button>
      <button onClick={()=>{setCurrentView(Pag2)}}>Páxina 2</button>
      {currentView}
    </>
  );
}

export default App;
