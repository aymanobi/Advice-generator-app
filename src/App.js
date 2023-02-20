import { useState, useEffect } from "react";
import './App.css'
import imgMobile from './images/pattern-divider-mobile.svg'
import imgDesktop from './images/pattern-divider-desktop.svg'
import dice from './images/icon-dice.svg'

const App = () => {

  const [advice, setAdvice] = useState([])


  const getData = async () => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()

    console.log(data)
    setAdvice(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <main>
      <h1>Advice generator app</h1>
      <div className="wrapper">

        {Object.keys(advice).map((add, index) => {
          return (
            <div key={index}>
              <p className="number">Advice #{advice[add].id}</p>
              <blockquote className="quote"><q> {advice[add].advice} </q></blockquote>
            </div>
          )
        })}

        <picture>
          <source media="(max-width:750px)" srcset={imgMobile} />
          <img src={imgDesktop} alt="pattern divider" className="img-pattern" />
        </picture>

        <button onClick={() => { getData() }}>
          <img src={dice} alt="quote generator" />
        </button>
      </div>
    </main>
  )
}

export default App;
