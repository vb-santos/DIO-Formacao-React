import { useNavigate, Link } from "react-router-dom";

import { Button } from "../../components/Button";
import Header from '../../components/Header';
import Input from '../../components/Input';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { Column, Container, EsquecerText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles'

import './style.css';

const Login = () => {
    const navigate = useNavigate();

    const handleClickFeed = (event) => {
        event.preventDefault();
        navigate('/feed');
    }

    return (<>
        <Header/>
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    
                    <form action="">
                        <Input placeholder="E-mail" type="email" leftIcon={<FontAwesomeIcon icon={faEnvelope} className="iconsFont" />}></Input>
                        <Input placeholder="Senha" type="password" leftIcon={<FontAwesomeIcon icon={faLock} className="iconsFont" />}></Input>
                        <Button title="Entrar" variant="secondary" onClick={handleClickFeed} type="button"/>
                    </form>

                    <Row>
                        <EsquecerText>Esqueci minha senha</EsquecerText>
                        <Link to="/registro" className="criarText">Criar Conta</Link>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>);
};

export { Login };
