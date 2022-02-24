import styled from "styled-components";
import Jason from './assets/jason2.png';
import Rain from './assets/jason2.png';
import Suki from './assets/jason2.png';
import Bill from './assets/jason2.png';
import Johnson from './assets/jason2.png';
import Charon from './assets/jason2.png';
import './Team.css';


const Container = styled("div")`
width: 80%;
box-sizing: border-box;
margin:auto;
margin-top:100px;
padding: 20px;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color:white;
`
const Name = styled("h2")`
text-align: center;
font-size: 1.5rem;
color:white;
padding-top:1rem;
`
const TeamImage = styled("img")`
width: 100%;
border-radius: 35%;
`

const Team =() =>{
    return (
        <Container id="Team">
            <h1>Team</h1>
            <div className="contrainer">
                <div className="row">
                <div className="column">
                <TeamImage src={Jason} alt="Snow"></TeamImage>
                <Name>Jason</Name>
                </div>
                <div className="column">
                <TeamImage src={Suki} alt="Forest"></TeamImage>
                <Name>Suki</Name>
                </div>
                <div className="column">
                <TeamImage src={Johnson} alt="Mountains"></TeamImage>
                <Name>Johnson</Name>
                </div>
                <div className="column">
                <TeamImage src={Johnson} alt="Mountains"></TeamImage>
                <Name>Johnson</Name>
                </div>
                </div>
                <div className="row">
                <div className="column">
                <TeamImage src={Rain} alt="Snow"></TeamImage>
                <Name>Rain</Name>
                </div>
                <div className="column">
                <TeamImage src={Bill} alt="Forest"></TeamImage>
                <Name>Bill</Name>
                </div>
                <div className="column">
                <TeamImage src={Charon} alt="Mountains"></TeamImage>
                <Name>Charon</Name>
                </div>
                <div className="column">
                <TeamImage src={Charon} alt="Mountains"></TeamImage>
                <Name>Charon</Name>
                </div>
                </div>
            </div>
        </Container>
        
        

    )
}

export default Team;