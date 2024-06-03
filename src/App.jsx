import React from "react"
import Nav from "./Components/Nav"
import Header from "./Components/Header"
import backgroundImage from "./assets/Home.svg"
import Frame1 from "./Components/Frame1"
import Frame2 from "./Components/Frame2"
import undrawImage from "./assets/undraw.svg"
import mobileImage from "./assets/mobile.svg"
import flowerImage from "./assets/flower.svg"
import Frame3 from "./Components/Frame3"

import Pricing from "./Components/Pricing"
import Footer from "./Components/Footer"
function App() {


  return (
    <>
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain', backgroundPosition: 'right', backgroundRepeat: 'no-repeat', zIndex: -1, width: "100vw",
        height: "100vh",}} >
    <Nav></Nav> 
    <Header></Header>
    <style jsx>{`
        @media (max-width: 640px) {
          nav {
            background-size: contain;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          nav {
            background-size: auto;
            background-repeat: repeat;
          }
        }
      `}</style>
    </div>
    <Frame1></Frame1>
    <Frame2 image={undrawImage} ></Frame2>
    <Frame2 image={mobileImage} ></Frame2>
    <Frame3 image={flowerImage} ></Frame3> 
    <Pricing></Pricing>
    <Footer></Footer>

    
</>
  )
}

export default App
