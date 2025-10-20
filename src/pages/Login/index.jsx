import {Link} from 'react-router-dom';
import {MdEmail, MdLock} from 'react-icons/md';
import {Button} from '../../components/Button';
import {Header} from '../../components/Header';
import {Column, Container, Row, Title, CriarText, EsqueciText, SubTitleLogin, TitleLogin, Wrapper} from './styles'
import {Input} from "../../components/Input"
import { useNavigate } from 'react-router-dom';
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { api  } from '../../services/api'
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("O e-mail é obrigatório"),
  password: yup.string().min(3, "No mínimo 3 caracteres").required("A senha é obrigatória"),
}).required();   


const Login = () => {

  const handleRegister = () => {
    navigate('/cadastro')
  }


  const navigate = useNavigate()
  
  const { control, handleSubmit, formState: { errors, isValid } } = useForm({resolver:yupResolver(schema),
    mode: 'onChange', 
  });

  console.log(isValid, errors)
  
  const onSubmit =async formData => {
    try{
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
      console.log('retorno api', data)
      if(data.length===1){
        navigate('/feed')
      }else{
        alert("E-mail ou senha incorretos")
      }
    }catch{
      alert("Houve um erro ao fazer login")
    }
  }

  return(
    <>
      <Header/>
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>
              Faça seu Cadastro
            </TitleLogin>
            <SubTitleLogin >
              Faça seu login e make the change._
            </SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail/>}/>
              <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
              <Button title="Entrar" variant='secondary' type="submit"></Button>
            </form>
            <Row>
              <EsqueciText>
                Esqueci minha senha
              </EsqueciText>
              <CriarText onClick={handleRegister} style={{cursor: "pointer"}}>
                Criar Conta
              </CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
          
    </>
  )
}

export {Login}
