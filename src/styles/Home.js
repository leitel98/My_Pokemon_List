import styled, {keyframes} from 'styled-components'
import Image from 'next/image';
import Link from 'next/link'

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
  padding: none;
  margin: none;
  `
export const Rectangle = styled.div`
  grid-area: aside;
  display: flex;
  background-color: lightgray;
  border-radius: 10px;
  margin: 10px;
  `;

export const Content = styled.div`
  background: #aeb6bf;
  grid-area: content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 10px;
  margin-top: 5px;
  border-radius: 4px;
  `

export const Navbar = styled.div`
  background-color: #474747;
  grid-area: nav;
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 0 20px;
  border-radius: 4px;
  margin: none;
`

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: flex-end; */
  flex: 1;
`;

export const ListItem = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: #229954;
  border-width: 4px 2px;
  border-style: solid;
  border-color: #ffffff;
  width: 300px;
  height: 50px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  text-transform: capitalize; /* make the text uppercase */
  font-size: 18px; /* increase the font size */
  font-weight: bold; /* make the font bold */
  font-family: 'Roboto', sans-serif; /* use a cool round font */
  text-decoration: none; /* remove text decoration */
  color: #333; /* change the text color */
  transition: all 0.2s ease-in-out; /* add a transition for hover animation */
  &:hover {
    background-color: #1f7e46; /* make the background slightly darker on hover */
    transform: scale(1.05); /* grow the component on hover */
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2); /* add a shadow on hover */
  }
`;

export const SearchBar = styled.input`
  border: 1px solid #ccc;
  border-radius: 20px; /* make the input a circle */
  font-size: 16px;
  margin: 5px;
  padding: 10px;
  width: 50px; /* start with a small width */
  transition: width 0.5s ease-in-out; /* add a transition to the width property */
  &:focus {
    width: 300px; /* change the width to 300px when the input is focused */
    border-radius: 4px; /* make the input a rectangle */
    outline: none; /* remove the default focus outline */
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  margin: 0;
  margin-right: 10px;
  margin-left: 10px;
  text-align: center;
  color: white;
  height: 80px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* add text shadow */
`;

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
  background-image: url('/pokeball.png');
  background-size: cover;
  animation: ${rotateAnimation} 2s linear infinite;
`;

export const ScreenIcon = styled(Image)`
  margin-right: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
  background: linear-gradient(to bottom right, #85c1e9, white, #85c1e9);
  border: 1px solid #000005;
  border-radius: 8px;
`;

export const PokeLink = styled(Link)`
  text-decoration: none;
  color: #333333;
  background-color: #fdd835;
  border-radius: 6px;
  border: 1px solid black;
  height: 40px;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span:first-child {
    /* styles for the first child span element */
  }

  & > span:last-child {
    /* styles for the last child span element */
    background-color: white;
    border-radius: 8px;
    color: #636363;
    padding: 4px;
  }
`