import { useState } from 'react'
import './App.css'
import MainPage from './mainpage/MainPage'
import Header from './common/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainPage />
    </>
  )
}

export default App
