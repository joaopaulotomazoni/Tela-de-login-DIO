import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Title, Column, Container, SubTitle, Wripper, Text, LoginText, Login } from "./styles"
import { MdEmail, MdLock, MdPerson} from 'react-icons/md';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import { Button } from "../../components/Button";
import { api  } from '../../services/api'
import { useNavigate } from "react-router-dom";


const Cadastro = () => {

  const navigate=useNavigate();


  const schema = yup.object({
    nome: yup.string().required("O nome é obrigatório"),
    email: yup.string().email("E-mail inválido").required("O e-mail é obrigatório"),
    password: yup.string().min(3, "No mínimo 3 caracteres").required("A senha é obrigatória"),
  }).required(); 

  const { control, handleSubmit, formState: { errors } } = useForm({resolver:yupResolver(schema),
    mode: 'onChange', 
  });

  const criarConta = async (formData) => {
    try{
      const novoUsuario={
        name: formData.nome,
        email: formData.email,
        senha: formData.password,
      };

      const {data} = await api.post('/users', novoUsuario);
      alert("Conta criada com sucesso");
      navigate('/login');
        
    }catch(e){
      alert("Houve um erro ao criar a conta. Verifique se o e-mail já não está cadastrado.")
    }
  }

  return(
    <>
      <Header></Header>
      <Container>
        <Column>
          <Title>
            A plataforma para você <br /> aprender com experts, <br /> dominar as principais <br /> tecnologias e entrar <br /> mais rápido nas <br /> empresas mais <br /> desejadas.
          </Title>
        </Column>
        <Column>          
          <Title>Comece agora grátis</Title>
          <SubTitle>Crie sua conta e make the change._</SubTitle>
          <Wripper>
            <form onSubmit={handleSubmit(criarConta)}>
              <Input name="nome" errorMessage={errors?.nome?.message} control={control} placeholder="Nome completo" leftIcon={<MdPerson/>}/>
              <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail/>}/>
              <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
              <Button variant="secondary" title="Criar minha conta" type="submit"/>
            </form>
          </Wripper>
           <Text>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Text> 
           <LoginText>Já tenho conta. <Login href="/login">Fazer login</Login></LoginText>
        </Column>
      </Container>
    </>
  )
}

export {Cadastro}