
import './App.css'
import Contact from './Components/ContactForm/Contact'
import ContactHeader from './Components/ContactHeader/ContactHeader'
import Navigation from './Components/Navigation/Navigation'

function App() {


  return <div>
    <Navigation/>
    <main className='main_container'>
    <ContactHeader/>
    <Contact/>
    </main>
   
  </div>
  
}

export default App
