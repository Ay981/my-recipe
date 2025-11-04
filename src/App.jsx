import './App.css'
import CustomContainer from '../src/components/CustomContainer'
import Custom from './components/Custom'
import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card' 
import Login from './components/Login'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

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
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
