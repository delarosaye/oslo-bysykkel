import React from 'react'
import styled from 'styled-components'

const Station = ({station, id}) => {
    return (
        <StationContainer>
            <h3>{id}. {station?.name}</h3>
            <p>Antall låser: <span>{station?.capacity}</span></p>
            <p>Antall tilgjenglige låser: <span>{station?.availabilities?.num_bikes_available}</span></p>
            <p>Adresse: <span>{station?.address}</span></p>
        </StationContainer>
    )
}

export default Station

const StationContainer = styled.div`
    height: 110px;
    background-color: #eee;
    margin: 10px 20px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.25);
    opacity: 0.8;
    transition: all 0.5ms ease-in-out;
    :hover{
        opacity: 1;
        transition: all 0.5ms ease-in-out;
        background-color: #E0F2FF;
    }
    > h3 {
        color: #222;
        margin-bottom: 15px;
    }
    > p{
        margin-bottom: 5px;
        font-size: 18px;
        font-weight: 500;
        > span {
            font-size: 16px;
            font-weight: normal;
            font-style: italic;
        }
    }
`;