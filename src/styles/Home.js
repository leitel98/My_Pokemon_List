import styled, {keyframes} from 'styled-components'
// import logo from '../../public/pokeball.png'

export const Center = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 20px;
`

export const Container = styled.div`
display: flex;
background-color: lightgray;
justify-content: center;
`
export const Content = styled.div`
background-color: lightgray;
margin-top: 20px;
`

export const ListItem = styled.div`
list-style: none;
display: flex;
align-items: center;
justify-content: left;
background-color: #fff;
width: 300px;
margin: 0 auto;
padding: 20px;
border-radius: 5px;
box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`
export const Navbar = styled.div`
background-color: royalblue;
display: flex;
align-items: center;
justify-content: center;
border-radius: 4px;
`

export const Title = styled.h1`
display:flex;
align-items: center;
margin: 0;
margin-right:20px;
text-align: center;
color: white;
height: 80px;
`

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-image: url('/pokeball.png');
  background-size: cover;
  animation: ${rotateAnimation} 2s linear infinite;
`;
