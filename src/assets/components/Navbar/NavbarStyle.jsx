import styled from "styled-components";

export const NavbarSection = styled.div`
border: green 2px solid;
height: 10vh;
width: 55vw;
display: flex;
align-items: center;
justify-content: center;
`;

export const NavbarNavigation = styled.div`
/* border: red 1px solid; */
height: 8vh;
width: 40vw;
display: flex;

ul{
    width: 30vw;
    justify-content: space-around;
    display: flex;
    align-items: center;
}
li{
    list-style: none;
    font-size: 1.2rem;
}
`;


