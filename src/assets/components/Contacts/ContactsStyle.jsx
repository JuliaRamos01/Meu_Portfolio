import styled from "styled-components";

export const ContactSection = styled.div`
display: flex;
justify-content: center;
height: 60vh;
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
border: green 2px solid;
button{
	background-color:#b26bcc;
	border-radius:8px;
    width: 10vw;
    height: 8vh;
	cursor:pointer;
	color:#ffffff;
	font-size:20px;
	font-weight:bold;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;
}
`;

export const ContactImg = styled.div`
height: 60vh;
width: 50vw;
text-align: center;
border: grey 2px solid;
img{
    width: 30vw;
}
`;