import Botao from './components/Botao.jsx'
import Header from './components/header.jsx'
import ComoFunciona from './components/ComoFunciona.jsx'
import CallToAction from './components/CallToAction.jsx'
import SobreNos from './components/SobreNos.jsx'
import Inicio from './components/Inicio.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div>
      <Header/>
      <Inicio/>
      <ComoFunciona/>
      <CallToAction/>
      <SobreNos/>
      <Footer/>
    </div>
  )
}

export default App