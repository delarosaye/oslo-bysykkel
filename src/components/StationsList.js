import React from 'react'
import styled from 'styled-components'
import Station from './Station'

const StationsList = ({ stationsWithAvailabilities}) => {
    //console.log(station)
    return (
        <StationsListContainer>
            {stationsWithAvailabilities?.map((station) => (
            <Station
                key={station?.station_id}
                station={station}
                id={stationsWithAvailabilities?.indexOf(station) + 1}
                />
            ))}
        </StationsListContainer>
    )
}

export default StationsList

const StationsListContainer = styled.div`
    
`;
