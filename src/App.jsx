import { useState } from 'react'

import './App.css'
import {data} from "./data/structure"
import { Structure } from './components/Structure'


function App() {
const [explorer,setExplorer]=useState(data)

  return (
    <div className='container'>
      <div className="sidenav">
     <Structure explorer={explorer} />
      </div>
<div className="main">
 
</div>
    </div>
  )
}

export default App
