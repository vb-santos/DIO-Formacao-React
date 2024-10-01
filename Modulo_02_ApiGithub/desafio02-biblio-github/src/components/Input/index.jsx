
import { InputContainer } from './styles';

function Input({value, onChange}) {
  return (
    <InputContainer>
        <input value={value} onChange={onChange} placeholder="@usuario/nome-repositorio"/>
    </InputContainer>
  )
}

export default Input;