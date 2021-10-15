import React, {useState, useEffect} from 'react'
import {Button, StationsListContainer} from '../Styles/StationsListElements'
import Station from './Station'

const StationsList = ({ stationsWithAvailabilities }) => {
    const [counter, setCounter] = useState(0)
    const [ stations, setStations] = useState(stationsWithAvailabilities[0])

    const handleReload = () => {
        (counter < stationsWithAvailabilities?.length -1) ?
            setCounter(counter + 1):
            setCounter(0) 
    }

    useEffect(() => {
        counter > 0 &&
        setStations(stationsWithAvailabilities[counter])
    }, [counter])

    return (
        <StationsListContainer>
            {(counter === 0 ? stationsWithAvailabilities[counter] : stations)?.map((station) => (
            <Station
                key={station?.station_id}
                station={station}
                />
            ))}
        <Button onClick={handleReload}>Vis neste 5</Button>
        </StationsListContainer>
    )
}

export default StationsList

