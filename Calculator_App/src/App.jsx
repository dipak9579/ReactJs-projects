import React from 'react'
import CalcUi from './components/CalcUi'
import CalcProvider from './context/CalcProvider'

const App = () => {
  return (
    <CalcProvider>
      <h1>Calculator App</h1>
      <CalcUi/>
    </CalcProvider>
  )
}

export default App
