import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TabPanel from './Companies/Paytm-09/TabPanel'




function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      

      <div style ={{marginBottom:'auto',marginRight:'10px'}}>
      <TabPanel  />
      </div>
    </>
  )
}

export default App
