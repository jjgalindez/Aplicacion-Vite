import {useState, useEffect } from 'react'
import './App.css'




function App() {

  const[enabled, setEnabled] = useState(false)
  const[position, setPosition] = useState( {x: 0, y: 0})

  const text = enabled
  ? 'Desactivar'
  : 'Activar'

  const cambioEstado = ()=> {
    setEnabled(!enabled)
  }

  useEffect(()=> {
    console.log('efecto', {enabled})

    const handleMove = (event: MouseEvent) => {
      const {clientX, clientY} = event
      console.log('Se mueve ', {clientX, clientY})
      setPosition({x: clientX, y: clientY})
       }

      if(enabled) {
        window.addEventListener('pointermove', handleMove)
      }

      return () => {
        window.removeEventListener('pointermove', handleMove)

      }
   
  },[enabled])

  return (
    <main>
    <div style={{
      position: 'absolute',
      backgroundColor: '#09f',
      borderRadius: '50%',
      opacity: '0.8',
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
      transform: `translate(${position.x}px, ${position.y}px)`
    }}>

    </div>
    <button onClick={cambioEstado}>{text}</button>
    </main>

    
  ) 
}

export default App
