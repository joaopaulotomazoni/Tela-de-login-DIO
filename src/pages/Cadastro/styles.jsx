import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center
`

export const Column = styled.div`
  flex: 1;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 10px;
  line-height: 44px;
`
export const SubTitle = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 20px;
  line-height: 44px;

  color: white;
`
export const Wripper = styled.div`
max-width: 275px;
`

export const Text = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: white;
  margin-top: 20px;
  max-width: 50%;
`

export const LoginText = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 25px;
  color: white;
  max-width: 50%;
  margin-top: 15px;
`
export const Login = styled.a`
  color: #83d803;
  text-decoration: none;
`



