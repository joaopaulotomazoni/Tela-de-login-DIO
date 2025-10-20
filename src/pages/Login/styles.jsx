import styled from "styled-components";

export const Container=styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top:120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Wrapper=styled.div`
  max-width: 300px;
`

export const Column=styled.div`
  flex: 1;
`

export const Row=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

  export const Title=styled.h2`
    font-family: 'Open Sans';   /* Define a família de fontes usada */
    font-style: normal;         /* Define o estilo da fonte (normal, italic, oblique) */
    font-weight: 700;           /* Define a espessura da fonte (700 = negrito) */
    font-size: 32px;            /* Define o tamanho da fonte */ 
    width: 320px;               /* Define a largura do elemento */
    margin-bottom: 20px;        /* Define a margem inferior do elemento */
    line-height: 44px;          /* Define a altura da linha */
    color: white;             /* Define a cor do texto */

  `

  export const TitleLogin=styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px; //altura da linha
  `

  export const SubTitleLogin=styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px; //altura da linha
  `

  export const EsqueciText=styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px; //altura da linha

    color: #e5e044;
  `

    export const CriarText=styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px; //altura da linha

    color: #e23dd7;
  `