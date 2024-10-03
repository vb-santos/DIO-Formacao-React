import { Link } from "react-router-dom";

import bannerImage from '../../assets/bannerDIO.png'
import { Button } from "../../components/Button";
import Header from '../../components/Header'
import Card from '../../components/Card';
import UserInfo from '../../components/UserInfo';

import { Container, Column, Title, TitleHighlight } from './styles'

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Column>

            <Column flex={1}>
                <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
                <UserInfo
                    percentual={85}
                    nome="Victor Barbosa"
                    image="https://avatars.githubusercontent.com/u/114593367?s=96&v=4"
                />
                <UserInfo
                    percentual={76}
                    nome="Victor Barbosa"
                    image="https://avatars.githubusercontent.com/u/114593367?s=96&v=4"
                />
                <UserInfo
                    percentual={50}
                    nome="Victor Barbosa"
                    image="https://avatars.githubusercontent.com/u/114593367?s=96&v=4"
                />
                <UserInfo
                    percentual={35}
                    nome="Victor Barbosa"
                    image="https://avatars.githubusercontent.com/u/114593367?s=96&v=4"
                />
                <UserInfo
                    percentual={15}
                    nome="Victor Barbosa"
                    image="https://avatars.githubusercontent.com/u/114593367?s=96&v=4"
                />
            </Column>
        </Container>
    </>);
};

export { Feed };
