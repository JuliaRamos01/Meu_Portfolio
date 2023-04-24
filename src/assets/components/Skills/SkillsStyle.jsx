import styled from "styled-components";

export const SkillsSection = styled.div`
display: flex;
height: 70vh;
align-items: center;
/* border: blue 2px solid; */
background-color:#1A1423;
@media (min-width: 350px) and (max-width: 500px) {
    flex-direction: column;
	height: 165vh;
}
`;

export const SkillImg = styled.div`
height: 70vh;
width: 45vw;
/* border: green 3px solid; */
text-align: end;
@media (min-width: 350px) and (max-width: 500px) {
    height: 35vh;
	width: 50vw;
	text-align: center;
}
img{
    width: 35vw;
	@media (min-width: 350px) and (max-width: 500px) {
    width: 55vw;
}
}
`;

export const SkillsHabilities = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 70vh;
width: 70vw;
/* border: purple 2px solid; */
@media (min-width: 350px) and (max-width: 500px) {
    width: 80vw;
	height: 130vh;
}
h1{
	font-family: 'Alfa Slab One', cursive;
    text-align: center;
	color: #FDC500;
	font-weight: 100;
    font-size: 3rem;
	padding-top: 2rem;
	padding-bottom: 1rem;
	@media (min-width: 350px) and (max-width: 500px) {
    font-size: 2.2rem;
	padding-top: 0;
}
}
`;

export const SkillsButtons = styled.div`
display: grid;
grid-template-columns: 200px 200px 200px;
align-items: center;
height: 45vh;
width: 40vw;
/* border: blue 3px solid; */
@media (min-width: 350px) and (max-width: 500px) {
    width: 70vw;
	height: 110vh;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
}
`;

export const ButtonHTML = styled.button`
    font-family: 'Open Sans', sans-serif;
	background-color:#3A0057;
	border-radius:30px;
	border: #ffffff 6px solid;
    width: 12vw;
    height: 10vh;
	color:#ffffff;
	font-size:20px;
	font-weight:bold;
	text-decoration:none;
	@media (min-width: 350px) and (max-width: 500px) {
		width: 40vw;
	}

	:hover{
		background-color: #e85d04;
	}
`;

export const ButtonCSS = styled.button`
    font-family: 'Open Sans', sans-serif;
	background-color:#3A0057;
	border-radius:30px;
	border: #ffffff 6px solid;
    width: 12vw;
    height: 10vh;
	color:#ffffff;
	font-size:20px;
	font-weight:bold;
	text-decoration:none;
	@media (min-width: 350px) and (max-width: 500px) {
		width: 40vw;
	}

	:hover{
		background-color: #023e8a;
	}
`;

export const ButtonJS = styled.button`
    font-family: 'Open Sans', sans-serif;
	background-color:#3A0057;
	border-radius:30px;
	border: #ffffff 6px solid;
    width: 12vw;
    height: 10vh;
	color:#ffffff;
	font-size:20px;
	font-weight:bold;
	text-decoration:none;
	@media (min-width: 350px) and (max-width: 500px) {
		width: 40vw;
	}

	:hover{
		background-color: #ffb703;
	}
`;

export const ButtonReact = styled.button`
    font-family: 'Open Sans', sans-serif;
	background-color:#3A0057;
	border-radius:30px;
	border: #ffffff 6px solid;
    width: 12vw;
    height: 10vh;
	color:#ffffff;
	font-size:20px;
	font-weight:bold;
	text-decoration:none;
	@media (min-width: 350px) and (max-width: 500px) {
		width: 40vw;
	}
	:hover{
		background-color: #03045e;
	}
`;

export const ButtonBootstrap = styled.button`
    font-family: 'Open Sans', sans-serif;
	background-color:#3A0057;
	border-radius:30px;
	border: #ffffff 6px solid;
    width: 12vw;
    height: 10vh;
	color:#ffffff;
	font-size:20px;
	font-weight:bold;
	text-decoration:none;
	@media (min-width: 350px) and (max-width: 500px) {
		width: 40vw;
	}

	:hover{
		background-color: #7400b8;
	}
`;

export const ButtonFigma = styled.button`
    font-family: 'Open Sans', sans-serif;
	background-color:#3A0057;
	border-radius:30px;
	border: #ffffff 6px solid;
    width: 12vw;
    height: 10vh;
	color:#ffffff;
	font-size:20px;
	font-weight:bold;
	text-decoration:none;
	@media (min-width: 350px) and (max-width: 500px) {
		width: 40vw;
	}

	:hover{
		background-color:#d5896f;
	}
`;

export const ButtonSaas = styled.button`
    font-family: 'Open Sans', sans-serif;
	background-color:#3A0057;
	border-radius:30px;
	border: #ffffff 6px solid;
    width: 12vw;
    height: 10vh;
	color:#ffffff;
	font-size:20px;
	font-weight:bold;
	text-decoration:none;
	@media (min-width: 350px) and (max-width: 500px) {
		width: 40vw;
	}

	:hover{
		background-color: #d81159;
	}
`;

export const ButtonStyledComp = styled.button`
    font-family: 'Open Sans', sans-serif;
	background-color:#3A0057;
	border-radius:30px;
	border: #ffffff 6px solid;
    width: 12vw;
    height: 10vh;
	color:#ffffff;
	font-size:15px;
	font-weight:bold;
	text-decoration:none;
	@media (min-width: 350px) and (max-width: 500px) {
		width: 40vw;
	}

	:hover{
		background-color: #003554;
	}
`;

export const ButtonGit = styled.button`
    font-family: 'Open Sans', sans-serif;
	background-color:#3A0057;
	border-radius:30px;
	border: #ffffff 6px solid;
    width: 12vw;
    height: 10vh;
	color:#ffffff;
	font-size:20px;
	font-weight:bold;
	text-decoration:none;
	@media (min-width: 350px) and (max-width: 500px) {
		width: 40vw;
	}
	:hover{
		background-color:#fd9e02;
	}
`;