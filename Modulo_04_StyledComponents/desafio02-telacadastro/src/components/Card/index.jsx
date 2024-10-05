import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture 
} from './styles';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fr50g6iar0tclcbau9oh2.png"/>
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/114593367?s=96&v=4"/>
                <div>
                    <h4>Victor Barbosa</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>

            <PostInfo>
                <h4>Projeto para curso de React</h4>
                <p>Projeto feito para o curso de react na formação react developer... <strong>Saiba mais</strong></p>
            </PostInfo>

            <HasInfo>
                <h4>#REACT #CSS #Javascript</h4>
                <p>
                <FontAwesomeIcon icon={faHeart} /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export default Card;