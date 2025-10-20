import styled from "styled-components";

export const Container=styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top:120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between; 
`
  export const Title=styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 44px; //altura da linha
    color: white;
    margin-bottom: 24px;
  `

export const TitleHighLight = styled.h3`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px; //altura da linha
  color: white;
  margin-bottom: 24px;
` 

export const Column = styled.div`
    flex:${({flex})=>flex};//esse flex dinamico serve para controlar o tanto que cada item ocuparia dentro da coluna
    padding-right:24px;
`