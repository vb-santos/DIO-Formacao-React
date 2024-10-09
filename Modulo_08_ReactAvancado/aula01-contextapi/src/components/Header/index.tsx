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
import { useContext } from 'react';
import { AuthContext } from '../../context/auth';

const Header = () => {
    const { user } = useContext(AuthContext);

  return (
   <Wrapper>
        <Container>
            <Row>
                <Link to='/'>
                    <img src={logoDio} alt="Logo da DIO" width={70}/>
                </Link>
                {user.id ? (<>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...'/>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </>) : null}
            </Row>
            <Row>
                {user.id ? (<>
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