import React from "react"
import Nav from "./Components/Nav"
import Header from "./Components/Header"
import backgroundImage from "./assets/Home.svg"


function App() {


  return (
    <>
    <div  className="relative w-full h-full" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain', backgroundPosition: 'right', backgroundRepeat: 'no-repeat', zIndex: -1, width: "100vw",
        height: "100vh",}} >
    <Nav></Nav> 
    <Header></Header>
    </div>
    
</>
  )
}

export default App
