import gitLogo from '../assets/github-11-512.png';
import { Container } from './styles';
import Input from '../components/Input'

const App = () => {
  return (
    <Container>
      <img src={gitLogo} alt="Github Logo" width={72} height={72} />
      <Input />
    </Container>
  )
}

export default App
