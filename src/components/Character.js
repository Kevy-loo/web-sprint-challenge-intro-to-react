// Write your Character component here
import React from "react"
import styled from "styled-components";

const StyleContainer = styled.div`
    h2{
        color: ${props => props.theme.white};
        transition: all .2s ease-in-out;
    }
    h2:hover{
        transform: scale(1.5);

    }
`
//not sure if we can delete the indexcss file so i can change background img/background color or anything like that


const Starwars = (props) => {

    return (
        <StyleContainer>
            <h2>{props.name}</h2>
            
        </StyleContainer>
    )
}

export default Starwars;

