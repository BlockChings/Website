import styled from "styled-components";
import './box.css';

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

`



const Roadmap =() =>{
    return (
        <Container id="Roadmap">
        <div className="fakeMenu">
        <div className="fakeButtons fakeClose"></div>
        <div className="fakeButtons fakeMinimize"></div>
        <div className="fakeButtons fakeZoom"></div>
        </div>
        <div className="fakeScreen">
            <p className="Fbox">In Your Area</p>
            <p className="box"><h1>Q1-2022</h1></p>
            <p className="box"><h1>Q1-2022</h1></p>
            <p className="box"><h1>Q1-2022</h1></p>
        </div>
        </Container>
    )
}

export default Roadmap;


/*
const Container = styled("div")`
width: 90%;
background-color: white;
margin:auto;
margin-top:100px;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const ListItem = styled("li")`
    margin-top: 10px;
`

const Roadmap =() =>{
    return (
        <Container id="Roadmap">
            <h1>Roadmap</h1>
            <h2>Q1 2022</h2>
            <ul style={{ padding:'0px 20%'}}>
                <ListItem>
                    IT DOG 
                </ListItem>
            </ul>
            <h2>Q2 2022</h2>
            <ul>
                <ListItem>
                    IT DOG 
                </ListItem>
            </ul>
            <h2>Q3 2022</h2>
            <ul> 
                <ListItem>
                    IT DOG 
                </ListItem>
            </ul>
            <h2>Q4 2022</h2>
            <ul>
                <ListItem>
                    IT DOG 
                </ListItem>
            </ul>
        </Container>
    )
}
 <div className="fakeScreen">
        <h1>Roadmap</h1>
            <h2>Q1 2022</h2>
            <ul style={{ padding:'0px 20%'}}>
                <ListItem>
                    IT DOG 
                </ListItem>
            </ul>
            <h2>Q2 2022</h2>
            <ul>
                <ListItem>
                    IT DOG 
                </ListItem>
            </ul>
            <h2>Q3 2022</h2>
            <ul> 
                <ListItem>
                    IT DOG 
                </ListItem>
            </ul>
            <h2>Q4 2022</h2>
            <ul>
                <ListItem>
                    IT DOG 
                </ListItem>
            </ul>
        </div>
*/