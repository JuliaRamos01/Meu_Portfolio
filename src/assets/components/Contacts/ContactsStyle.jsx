import styled from "styled-components";

export const ContactSection = styled.div`
display: flex;
justify-content: center;
height: 65vh;
background-color: #ffe5ec;
/* border: blue 3px solid; */
`;

export const ContactText = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 60vh;
width: 50vw;
text-align: center;
h1{
	font-family: 'Alfa Slab One', cursive;
    text-align: center;
	color: #FDC500;
	font-weight: 100;
    font-size: 3rem;
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

	:hover{
		background-color: #001233;
	}
`;

export const ContactImg = styled.div`
height: 60vh;
width: 50vw;
text-align: center;
/* border: grey 2px solid; */
img{
    width: 30vw;
}
`;