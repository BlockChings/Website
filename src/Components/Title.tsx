import styled from "styled-components";


const Container = styled("div")`
width: 100%;
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

const Title =() =>{
    return (
        <Container>
        <h1>Milestone</h1>
        </Container>
        )
    }
    
    export default Title;