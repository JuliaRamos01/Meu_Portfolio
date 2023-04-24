import styled from "styled-components";

export const NavbarSection = styled.div`
/* border: green 2px solid; */
height: 10vh;
display: flex;
background-color:#1A1423
`;

export const NavbarBox = styled.div`
display: flex;
width: 55vw;
height: 11vh;
justify-content: center;
position: fixed;
z-index: 1;
@media (min-width: 350px) and (max-width: 500px) {
    width:100%
    }
/* border: red 5px solid; */
`;

export const NavbarNavigation = styled.div`
background-color:#3A0057;
border-top: none;
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
border-bottom-left-radius: 2rem;
border-bottom-right-radius: 2rem;
height: 9vh;
width: 40vw;
display: flex;
@media (min-width: 350px) and (max-width: 500px) {
    width:65vw;
    align-items: center;
    justify-content: center;
    }

ul{
    width:40vw;
    justify-content: space-around;
    display: flex;
    align-items: center;
    font-family: 'Concert One', cursive;
    @media (min-width: 350px) and (max-width: 500px) {
    display: none;
    }
}
li{
    list-style: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: white;
    :hover{
        color: #F9D402;
    }
    @media (min-width: 350px) and (max-width: 500px){
    /* font-size: 0.9rem; */
    display: none;
    }
}

img{
    display: none;
    @media (min-width: 350px) and (max-width: 500px){
    display: flex;
    height: 7vh;
    }
}

h1{
    display: none;
    width: 40vw;
    @media (min-width: 350px) and (max-width: 500px){
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    /* border: red 2px solid; */
    text-align: center;
    color: white;
    font-family: 'Open Sans', sans-serif;
    }
}
`;


