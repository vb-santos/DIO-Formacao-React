
import { ItemContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function ItemRepo({repo, handleRemoveRepo}) {
  const handleRemove = (e) => {
    e.stopPropagation();
    handleRemoveRepo(repo.id);
  }

  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target='_blank' rel='noreferrer'>Ver repositório</a><br />
        <button className="remover" onClick={handleRemove}>Remover <FontAwesomeIcon icon={faTrash} /></button>

        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;