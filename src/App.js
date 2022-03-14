import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap/dist/css/bootstrap.css'
import Menu from "./Components/Menu"
import "./style.css"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Home from "./Components/Home"
import 'font-awesome/css/font-awesome.min.css';
import {library} from "@fortawesome/fontawesome-svg-core"
import {fab,faGoogle,faLinkedin} from "@fortawesome/free-brands-svg-icons"
import Contact from "./Components/Contact"
import { fas,faEnvelope, faDatabase } from '@fortawesome/free-solid-svg-icons'
import Footer from "./Components/Footer"
import data from "./data"
import Project from "./Components/Project"

library.add(fab,faGoogle,faLinkedin,faDatabase)
library.add(fas,faEnvelope,faDatabase)


const info=data.map(datas=>{
  return(
    <Project
      key={datas.id}
      infos={datas}
    />
  )
})


function App() {
  return (
      <div>
      <Menu/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
      </div>
  );
}

export default App;
