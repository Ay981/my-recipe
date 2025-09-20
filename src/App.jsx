import './App.css'
import CustomContainer from '../src/components/CustomContainer'
import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card' 
import recipe from '../src/assets/recipe_tempo.png'
import Load from './components/Load'
function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <CustomContainer/>
      <div className='flex justify-center items-center mt-8 gap-3.5'>     
         <Card time={"40 min"} image={recipe} title={"Russian"} rating={4.5}/> 
          <Card time={"40 min"} image={recipe} title={"Russian"} rating={4.5}/> 
     
      </div>

         <Load/>

    </>   
  )
}

export default App
