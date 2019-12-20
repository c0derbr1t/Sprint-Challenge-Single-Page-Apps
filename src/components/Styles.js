import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



// to App.js
export const Page = styled.main`
    background-image: url('https://images.pond5.com/slime-grunge-motion-background-green-footage-076543711_iconl.jpeg');
    background-size: cover;
`;

export const MainNav = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const MainLinks = styled(NavLink)`
    text-decoration: none;
    font-size: 1.5rem;    
    color: #f7f8b0;
    border: 3px outset #00b637;
    padding: 1%;
    background-color: rgba(0, 0, 0, .5);
    border-radius: 5px;
`;

export const HeaderH1 = styled.h1`
    font-size: 2.5rem;
    color: #f7f8b0;
    text-shadow: 0 0 9px #FF0000, 0 0 11px #0000FF; 
`;

// to WelcomePage.js
export const WelcomeHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const WelcomeH1 = styled.h1`
    color: #f7f8b0;
`;

export const Image = styled.img`
    margin: 0 auto;
    border: 6px outset #00b637;
    border-radius: 5px;
`;

// to CharacterList.js & some to SearchForm.js
export const ListSection = styled.section`
    margin: 5%;
    display: flex;
    flex-direction: column;
`;

export const NavDiv = styled.div`
    display: flex;
    justify-content: center;
`;

export const ListDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const ListLinks = styled(NavLink)`
    text-decoration: none;
    color: #f7f8b0;
    padding: .5%;
    font-size: 1.2rem;
    border: 3px outset #00b637;
    background-color: rgba(0, 0, 0, .5);
    border-radius: 5px;
    margin: 1%;
`;

export const Card = styled.div`
    margin: 3%;
`;

// to SearchForm.js
export const SearchH3 = styled.h3`
    text-align: center;
    color: #f7f8b0;
    font-size: 1.6rem;
    text-shadow: 0 0 9px #FF0000, 0 0 11px #0000FF; 
    margin-top: -3%;
`;

export const SearchBox = styled.input`
    margin: 0 auto;
    text-align: center;
    padding: 1%;
    border: 3px outset #00b637;
    background-color: black;
    color: #f7f8b0;
    font-size: 1.1rem;
`;

// to CharacterCard.js
export const CharCard = styled.div`
    background-color: rgba(0, 0, 0, .5);
`;

export const CharInfo = styled.div`
    text-align: center;
    padding: 2%;
    color: #f7f8b0;
`;

