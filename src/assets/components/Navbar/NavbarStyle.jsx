import styled from "styled-components";

export const NavbarSection = styled.div`
/* border: green 2px solid; */
height: 10vh;
width: 55vw;
display: flex;
/* align-items: center; */
justify-content: center;
`;

export const NavbarNavigation = styled.div`
background: rgba( 102, 0, 153, 0.5 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 1px );
-webkit-backdrop-filter: blur( 1px );
border: 1px solid rgba( 255, 255, 255, 0.18 );
border-bottom-left-radius: 2rem;
border-bottom-right-radius: 2rem;
height: 9vh;
width: 40vw;
display: flex;

ul{
    width:40vw;
    justify-content: space-around;
    display: flex;
    align-items: center;
    font-family: 'Concert One', cursive;
}
li{
    list-style: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: white;
    :hover{
        color: #F9D402;
    }
}
`;


