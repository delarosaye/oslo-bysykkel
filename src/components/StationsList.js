import React from 'react'
import {StationsListContainer} from '../Styles/StationsListElements'
import Station from './Station'

const StationsList = ({ stationsWithAvailabilities }) => {
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

