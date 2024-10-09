import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

import { Button } from "../../components/Button";
import Header from '../../components/Header';
import Input from '../../components/Input';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { Column, Container, CriarText, EsquecerText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles'
import { useContext } from 'react';

import './style.css';
import { IFormData } from "./types";
import { AuthContext } from "../../context/auth";

const schema = yup.object({
    email: yup.string().email('Email não é válido').required('Este campo é obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required(),
}).required();

const Login = () => {
    const { handleLogin } = useContext(AuthContext);

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (formData: IFormData) => {
        handleLogin(formData)
    }; 

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
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            name="email"
                            errorMessage={errors.email?.message}
                            control={control}
                            placeholder="E-mail"
                            type="email"
                            leftIcon={
                                <FontAwesomeIcon icon={faEnvelope} 
                                className="iconsFont" />
                            }
                        />

                        <Input
                            name="password"
                            errorMessage={errors.password?.message}
                            control={control}
                            placeholder="Senha"
                            type="password"
                            leftIcon={
                                <FontAwesomeIcon icon={faLock}
                                className="iconsFont"/>
                            }
                        />

                        <Button title="Entrar" variant="secondary" type="submit"/>
                    </form>

                    <Row>
                        <EsquecerText>Esqueci minha senha</EsquecerText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>);
};

export { Login };
