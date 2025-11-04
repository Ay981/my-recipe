import './App.css'
import CustomContainer from '../src/components/CustomContainer'
import Custom from './components/Custom'
import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card' 
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const Home = () => (
    <>
      <Header/>
      <Hero/>
      <CustomContainer/>
      <Card/>
    </>
  )

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
