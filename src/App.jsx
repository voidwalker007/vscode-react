import { useState } from 'react'

import './App.css'
import {data} from "./data/structure"
import { FolderStruct } from './components/Folderstruct'

function App() {
const [explorer,setExplorer]=useState(data)

  return (
    <div className='container'>
      <div className="sidenav">
      <FolderStruct explorer={explorer} />
      </div>
<div className="main">
 
</div>
    </div>
  )
}

export default App
