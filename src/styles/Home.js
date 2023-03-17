import styled, {keyframes} from 'styled-components'
// import logo from '../../public/pokeball.png'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:             
    "nav nav"            
    "aside content"            
    "footer footer";
  grid-template-columns: 230px 1fr;
  grid-template-rows: 50px 1fr 30px;
  `
export const Rectangle = styled.div`
  grid-area: aside;
  display: flex;
  background-color: lightgray;
  border-radius: 10px;
  margin: 10px;
  `;

export const Content = styled.div`
  background: linear-gradient(to bottom right, red, black, white);
  grid-area: content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 10px;
  `

  export const Navbar = styled.div`
    background-color: royalblue;
    grid-area: nav;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 4px;
  `

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

export const Select = styled.select`
  font-size: 16px;
  padding: 5px;
  border: none;
  border-radius: 4px;
  background-color: white;
  color: black;
  margin-left: 10px;
`;

export const ListItem = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: #fff;
  width: 300px;
  height: 50px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h1`
  display:flex;
  align-items: center;
  margin: 0;
  margin-right:10px;
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
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-image: url('/pokeball.png');
  background-size: cover;
  animation: ${rotateAnimation} 2s linear infinite;
`;
