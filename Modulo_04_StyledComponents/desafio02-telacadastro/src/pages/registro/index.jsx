import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import Header from '../../components/Header';
import Input from '../../components/Input';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

import { ContainerRegistro, ContainerForm, ColumnRegistro, TituloEsquerda, LoginText } from './styles';

const Registro = () => {
    const navigate = useNavigate();

    const handleNavigateLogin = () => {
        navigate('/login');
    }

  return (<>
    <Header/>
    <ContainerRegistro>
        <TituloEsquerda>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas desejadas.
        </TituloEsquerda>

        <ColumnRegistro>
            <ContainerForm>
                <h1>Comece agora grátis</h1>
                <p>Crie sua conta e make the change._</p>

                <form action="">
                    <Input placeholder="Nome completo" type="text" leftIcon={<FontAwesomeIcon icon={faUser} className="iconsFont" />}></Input>
                    <Input placeholder="E-mail" type="email" leftIcon={<FontAwesomeIcon icon={faEnvelope} className="iconsFont" />}></Input>
                    <Input placeholder="Password" type="password" leftIcon={<FontAwesomeIcon icon={faLock} className="iconsFont" />}></Input>
                    <Button title="Criar minha conta" variant="secondary" onClick={handleNavigateLogin}></Button>
                </form>

                <p>Ao clicar em &quot;criar minha conta grátis&quot;,<br /> declaro que aceito as Políticas de <br /> Privacidade e os Termos de Uso da DIO.</p>
            </ContainerForm>
            <LoginText>Já tenho conta. <span onClick={handleNavigateLogin}>Fazer login</span></LoginText>
        </ColumnRegistro>
    </ContainerRegistro>

    </>)
}

export default Registro;