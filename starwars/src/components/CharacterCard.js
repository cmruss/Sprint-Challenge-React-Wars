import React from "react";
import styled from "styled-components";

const Card = styled.div`
    background-color: ivory;
    opacity; 0.6;
    width: 20%;
    margin: 2%;
    padding: 3%;
    border-radius: 15px;
`
const CardTitle = styled.div`
    font-size: 2.6rem;
`
const CardText = styled.div`
    font-size 2rem;
`

const CharacterCard = (props) =>{

    return(
    
        <Card>
            <CardTitle>{props.name}</CardTitle>
            <CardText>Birth Year: {props.dob}.</CardText>
            <CardText>Eyes: {props.eyes}.</CardText>
            <CardText>Gender: {props.gender}.</CardText>
            <CardText>Height: {props.height}.</CardText>
            <CardText>Mass: {props.mass}.</CardText>
            <CardText>Complexion: {props.skin}.</CardText>
        </Card>
        
    );
};

export default CharacterCard;