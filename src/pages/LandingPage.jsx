import { useState } from 'react';
import Header from '../components/header.jsx'
import Inicio from '../components/Inicio.jsx'
import ComoFunciona from '../components/ComoFunciona.jsx'
import CallToAction from '../components/CallToAction.jsx'
import SobreNos from '../components/SobreNos.jsx';
import Footer from '../components/Footer.jsx';
import Modal from '../components/Modal.jsx';
import FormularioLogin from '../components/FormularioLogin.jsx';
import FormularioCadastro from '../components/FormularioCadastro.jsx';

function LandingPage() {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [signupModalOpen, setSignupModalOpen] = useState(false);
    const [initialEmail, setInitialEmail] = useState('');

    const switchToSignup = () => {
        setLoginModalOpen(false);
        setSignupModalOpen(true);
    };

    const switchToLogin = () => {
        setSignupModalOpen(false);
        setLoginModalOpen(true);
    };

    const handleHeroSignup = (email) => {
        setInitialEmail(email);
        setSignupModalOpen(true);
    };

    return (
        <>
            <Header
                onLoginClick={() => setLoginModalOpen(true)}
                onSignupClick={() => {
                    setInitialEmail('');
                    setSignupModalOpen(true);
                }}
            />
            <Inicio onCadastrarClick={handleHeroSignup} />
            <ComoFunciona />
            <CallToAction />
            <SobreNos />
            <Footer />

            <Modal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} size="small">
                <FormularioLogin
                    onSwitchToSignup={switchToSignup}
                    onSuccess={() => setLoginModalOpen(false)}
                />
            </Modal>

            <Modal isOpen={signupModalOpen} onClose={() => setSignupModalOpen(false)} size="large">
                <FormularioCadastro
                    onSwitchToLogin={switchToLogin}
                    initialEmail={initialEmail}
                    onSuccess={() => setSignupModalOpen(false)}
                />
            </Modal>
        </>
    );
}

export default LandingPage;