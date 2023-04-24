import styled from "styled-components";

export const ContactSection = styled.div`
display: flex;
justify-content: center;
height: 65vh;
background-color:#1A1423;
/* border: blue 3px solid; */
@media (min-width: 350px) and (max-width: 500px) {
    flex-direction: column-reverse;
	height: 85vh;
	align-items: center;
}
`;

export const ContactText = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 60vh;
width: 50vw;
text-align: center;
@media (min-width: 350px) and (max-width: 500px) {
		height: 50vh;
	}
h1{
	font-family: 'Alfa Slab One', cursive;
    text-align: center;
	color: #FDC500;
	font-weight: 100;
    font-size: 3rem;
	@media (min-width: 350px) and (max-width: 500px) {
    font-size: 2.4rem;
}
}
/* border: green 2px solid; */
`;

export const ButtonEmail = styled.button`
    font-family: 'Open Sans', sans-serif;
	background-color:#3A0057;
	border-radius:30px;
	border: #ffffff 6px solid;
    width: 12vw;
    height: 10vh;
	cursor:pointer;
	color:#ffffff;
	font-size:20px;
	font-weight:bold;
	text-decoration:none;
	@media (min-width: 350px) and (max-width: 500px) {
		width: 40vw;
	}

	:hover{
		background-color: #f72585;
	}
`;

export const ButtonLinkedin = styled.button`
    font-family: 'Open Sans', sans-serif;
	background-color:#3A0057;
	border-radius:30px;
	border: #ffffff 6px solid;
    width: 12vw;
    height: 10vh;
	cursor:pointer;
	color:#ffffff;
	font-size:20px;
	font-weight:bold;
	text-decoration:none;
	@media (min-width: 350px) and (max-width: 500px) {
		width: 40vw;
	}

	:hover{
		background-color: #0a2472;
	}
`;

export const ButtonGithub = styled.button`
    font-family: 'Open Sans', sans-serif;
	background-color:#3A0057;
	border-radius:30px;
	border: #ffffff 6px solid;
    width: 12vw;
    height: 10vh;
	cursor:pointer;
	color:#ffffff;
	font-size:20px;
	font-weight:bold;
	text-decoration:none;
	@media (min-width: 350px) and (max-width: 500px) {
		width: 40vw;
	}

	:hover{
		background-color: #001233;
	}
`;

export const ContactImg = styled.div`
height: 60vh;
width: 50vw;
text-align: center;
/* border: grey 2px solid; */
@media (min-width: 350px) and (max-width: 500px) {
    height: 30vh;
}
img{
    width: 35vw;
	@media (min-width: 350px) and (max-width: 500px) {
    width: 55vw;
}
}
`;