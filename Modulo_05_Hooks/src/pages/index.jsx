import { useState, useEffect, useMemo, useCallback } from 'react';

const Teste = () => {
    const [name, setName] = useState('Victor');
    const [age, setAge] = useState(18);
    

    const handleChangeName = useCallback(() => {
        setName(prev => prev === 'Victor' ? 'José' : 'Victor');
    }, [])

    // useCallback armazena valores identicamente ao useMemo, porém armazenando funções, também necessitando de um array de dependências [age] para dinamicidade
    const handleChangeAge = useCallback(() => {
        const newAge = 10 * age;
        console.log('age atual', age, newAge);
        setAge(prev => prev === 18 ? 25 : 18);
    }, [age])

    // Ativa quando algum componente ou a página renderiza, se for passado alguma variável no conchete (ex: name), ele ativa novamente
    useEffect(() => {
        // É possível passar funções no useEffect, sendo carregadas quando a página for renderizada ou clicar em algum elemento
        // alert('renderizei')

        // Quando algum componente sai de tela
        // Ex: usuário offline ou saiu da tela
        // return () => {alert('desmontei')}
    }, []);

    // useMemo evita que o conteúdo na variável seja realizada todas as vezes que os componentes forem atualizados, salvando apenas uma vez o conteúdo e permanecendo
    const calculo = useMemo(() => {
        return 10 * 4324 // Caso minha conta dependa de algum componente, precisamos reformular o uso do useMemo
    }, []);

    const calcularIdade = useMemo(() => {
        return 10 * age; // Função refatorada
    }, [age])



    console.log('renderizou', calculo);
    console.log('renderizou idade', calcularIdade);
    
  return (
    <div>
        <p>Nome: {name}</p>
        <p>Idade: {age}</p>
        <br />
        <button onClick={handleChangeName}>Alterar nome</button>
        <button onClick={handleChangeAge}>Alterar idade</button>
    </div>
  )
}

export default Teste;