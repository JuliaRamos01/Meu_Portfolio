import styled from "styled-components";

export const SkillsSection = styled.div`
display: flex;
height: 70vh;
align-items: center;
/* border: blue 2px solid; */
background-color: #ffe5ec;
`;

export const SkillImg = styled.div`
height: 70vh;
width: 45vw;
border: green 3px solid;
text-align: center;
img{
    width: 30vw;
}
`;

export const SkillsHabilities = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 70vh;
width: 70vw;
border: purple 2px solid;
h1{
    text-align: center;
}
`;

export const SkillsButtons = styled.div`
display: grid;
grid-template-columns: 200px 200px 200px;
align-items: center;
height: 40vh;
width: 40vw;
border: blue 3px solid;
button{
	background-color:#b26bcc;
	border-radius:8px;
    width: 10vw;
    height: 8vh;
	cursor:pointer;
	color:#ffffff;
	font-size:20px;
	font-weight:bold;
	padding:13px 32px;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;
}
`;