import { useState } from 'react';
import Header from './components/header.jsx'
import ComoFunciona from './components/ComoFunciona.jsx'
import CallToAction from './components/CallToAction.jsx'
import SobreNos from './components/SobreNos.jsx'
import Inicio from './components/Inicio.jsx'
import Footer from './components/Footer.jsx'
import Modal from './components/Modal.jsx';
import FormularioLogin from './components/FormularioLogin.jsx'
import FormularioCadastro from './components/FormularioCadastro.jsx'

function App() {

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  const switchToSignup = () => {
    setLoginModalOpen(false);
    setSignupModalOpen(true);
  };

  const switchToLogin = () => {
    setSignupModalOpen(false);
    setLoginModalOpen(true);
  };

  return (
    <div>
      <Header
        onLoginClick={() => setLoginModalOpen(true)}
        onSignupClick={() => setSignupModalOpen(true)}
      />
      <Inicio/>
      <ComoFunciona/>
      <CallToAction/>
      <SobreNos/>
      <Footer/>

      {/* 👇 O MODAL ESTAVA FALTANDO. PRECISAMOS ADICIONÁ-LO DE VOLTA AQUI 👇 */}
      <Modal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} size="small">
        <FormularioLogin onSwitchToSignup={switchToSignup} />
      </Modal>

      <Modal isOpen={signupModalOpen} onClose={() => setSignupModalOpen(false)} size="large">
        <FormularioCadastro onSwitchToLogin={switchToLogin} />
      </Modal>
    
    </div>
  )
}

export default App;