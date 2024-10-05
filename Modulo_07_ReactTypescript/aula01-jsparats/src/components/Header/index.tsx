import logoDio from '../../assets/logoDio.png';

import { Link } from 'react-router-dom';
import { Button } from '../Button';
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';
import { IHeader } from './types';

const Header = ({autenticado}: IHeader) => {
  return (
   <Wrapper>
        <Container>
            <Row>
                <img src={logoDio} alt="Logo da DIO" width={70}/>
                {autenticado ? (<>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...'/>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </>) : null}
            </Row>
            <Row>
                {autenticado ? (<>
                    <UserPicture src="https://avatars.githubusercontent.com/u/114593367?s=96&v=4"/>
                </>) : (<>
                    <Link to="/"><MenuRight>Home</MenuRight></Link>
                    <Button title="Entrar"/>
                    <Button title="Cadastrar"/>
                </>)}
            </Row>
        </Container>
   </Wrapper>
  )
}

export default Header;