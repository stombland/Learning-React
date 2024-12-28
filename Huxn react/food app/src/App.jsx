import React from 'react'
import FoodApp from './foodApp/FoodApp'
import Calculator from './Calculator/Calculator'
import ToggleBackgroundColor from './ColorToggle/ColorToggle'

const App = () => {
  return (
    <div>
      <h1 style={{textAlign:'center'}}> Food App</h1>
      <FoodApp />
      {/* <Calculator /> */}
      {/* <ToggleBackgroundColor /> */}
    </div>
  )
}

export default App