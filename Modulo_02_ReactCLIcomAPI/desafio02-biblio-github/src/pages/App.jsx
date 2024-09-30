import gitLogo from '../assets/github-11-512.png';
import { Container } from './styles';
import { useState } from 'react';

import Input from '../components/Input'
import ItemRepo from '../components/ItemRepo/';
import Button from '../components/Button';

import { api } from '../services/api';

const App = () => {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`);

    if(data.id){
      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return;
      }    
    } else {
      alert('Repositório não encontrado!');
    }
  }

  const handleRemoveRepo = (id) => {
    const removerRepo = repos.filter(repo => repo.id !== id);
    setRepos(removerRepo);
  }
  
  return (
    <Container>
      <img src={gitLogo} alt="Github Logo" width={72} height={72} />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>

      {repos.map(repo => <ItemRepo
        key={repo.id}
        repo={repo}
        handleRemoveRepo={handleRemoveRepo}
      />)}
    </Container>
  )
}

export default App
