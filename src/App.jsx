import React from 'react'
import Counter from './components/Counter'
import CounterContextProvider from './context/CounterContext'

const App = () => {
  return (
    <CounterContextProvider>
    <div className="container">
      <Counter></Counter>
    </div>
    </CounterContextProvider>
  )
}

export default App