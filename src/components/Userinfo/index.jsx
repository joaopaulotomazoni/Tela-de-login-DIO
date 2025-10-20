import React from 'react';
import {Container,NameText,Progress,UserPicture} from './styles';

// import { Container } from './styles';
const Userinfo = ({nome, percentual, image}) => {
  return (
    <Container>
      <UserPicture src={image}/>
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual}></Progress>
      </div>
    </Container>
  )
}

export {Userinfo};