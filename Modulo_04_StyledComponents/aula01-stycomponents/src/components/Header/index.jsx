import logoDio from '../../assets/logoDio.png';

import { Button } from '../Button';
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper
} from './styles';

const Header = () => {
  return (
   <Wrapper>
        <Container>
            <Row>
                <img src={logoDio} alt="Logo da DIO" width={70}/>
                <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href='#'>Home</MenuRight>
                <Button title="Entrar"/>
                <Button title="Cadastrar"/>
            </Row>
        </Container>
   </Wrapper>
  )
}

export default Header;