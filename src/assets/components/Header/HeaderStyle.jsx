import styled from "styled-components";

export const HeaderSection = styled.header`
height: 75vh;
display: flex;
background-color:#1A1423;
@media (min-width: 350px) and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
}
`;

export const HeaderImage = styled.div`
display: flex;
height: 75vh;
width: 45vw;
/* border: red 1px solid; */
align-items: center;
justify-content: center;
@media (min-width: 350px) and (max-width: 500px) {
    width: 20vw;
    height: 45vh;
}
img{
    width: 50vw;
    height: 100vh;
    @media (min-width: 350px) and (max-width: 500px) {
    width: 80vw;
    height: 60vh;
    }
}
`;

export const HeaderText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 70vh;
width: 50vw;
text-align: center;
padding: 1rem;
/* border: magenta 1px solid; */
@media (min-width: 350px) and (max-width: 500px) {
    width: 70vw;
    height: 40vh;
    padding: 0.2rem;
}
h1{
    font-family: 'Alfa Slab One', cursive;
    color: #FDC500;
    font-weight: 100;
    font-size: 2.8rem;
    padding-bottom: 1rem;
    @media (min-width: 350px) and (max-width: 500px) {
    font-size: 2.4rem;
    padding-bottom: 0.5rem;
}
}
p{
    font-size: 1.2rem;
    /* border: purple 1px solid; */
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    /* color: #3A0057; */
    color: white;
}
`;