import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GeneralInfo from "./Components/GeneralInfo.jsx";
import Education from "./Components/Education.jsx";
import Experience from "./Components/Experience.jsx";
import './App.css';

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
       <div>
      <h1>CV-Application</h1>
      <GeneralInfo />
      <Education />
      <Experience />
    </div>
    </>
  );
}

export default App;
