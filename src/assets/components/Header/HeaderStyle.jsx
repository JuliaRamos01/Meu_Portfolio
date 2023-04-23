import styled from "styled-components";

export const HeaderSection = styled.header`
height: 75vh;
display: flex;
background-color:#1A1423;
`;

export const HeaderImage = styled.div`
display: flex;
height: 75vh;
width: 45vw;
/* border: red 1px solid; */
align-items: center;
justify-content: center;
img{
    width: 50vw;
    height: 100vh;
}
`;

export const HeaderText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 70vh;
width: 50vw;
text-align: center;
padding: 1.1rem;
/* border: magenta 1px solid; */
h1{
    font-family: 'Alfa Slab One', cursive;
    color: #FDC500;
    font-weight: 100;
    font-size: 3rem;
}
p{
    font-size: 1.2rem;
    /* border: purple 1px solid; */
    text-align: justify;
    font-family: 'Open Sans', sans-serif;
    /* color: #3A0057; */
    color: white;
}
`;