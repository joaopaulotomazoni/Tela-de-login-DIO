import {Link} from 'react-router-dom';
import {Button} from '../../components/Button';
import {Header} from '../../components/Header';
import {Container, Title, TitleHighLight, TextContent} from './styles'
import bannerImage from "../../assets/Banner.webp"
import { useNavigate } from 'react-router-dom';
const Home = () => {

  const navigate = useNavigate();

  const HandleClickSignIn = () =>{
    navigate('/login');
  }

  return(
    <>
      <Header/>
      <Container>
        <div>
          <Title>
            <TitleHighLight>
              Implemente <br />
            </TitleHighLight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts. 
          </TextContent>
          <Button title="Começar" variant='secondary' onClick={HandleClickSignIn}></Button>
        </div>
        <div>
          <img src={bannerImage} alt="Imagem Principal" />
        </div>
      </Container>
          
    </>
  )
}

export {Home}

