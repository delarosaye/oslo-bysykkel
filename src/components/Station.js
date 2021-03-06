import React from 'react'
import {
    StationContainer,
    StationName,
    StationContent, StationContentValue
} from '../Styles/StattionElements'

const Station = ({station, counter, size, id}) => {
    return (
        <StationContainer>
            <StationName>{counter===0 ? (id + 1) : (size * counter) + id + 1}. {station?.name}</StationName>
            <StationContent>Antall låser: <StationContentValue>{station?.capacity}</StationContentValue></StationContent>
            <StationContent>Antall tilgjenglige låser: <StationContentValue>{station?.availabilities?.num_bikes_available}</StationContentValue></StationContent>
            <StationContent>Adresse: <StationContentValue>{station?.address}</StationContentValue></StationContent>
        </StationContainer>
    )
}

export default Station



