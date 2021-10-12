import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ReactTimeago from 'react-timeago'
import StationsList from './components/StationsList'

const App = () => {
  const [stationsWithAvailabilities, setStationsWithAvailabilities] = useState([])
  const [systemInfo, setSystemInfo] = useState({})

  const getStationsWithAvailabilities = async (stationsAndAvailabilities) => {
    const stationsWithAvailabilities = await stationsAndAvailabilities[0]?.data?.data?.stations?.map(station => {
        const stationAvailable = stationsAndAvailabilities[1].data?.data?.stations?.find(available => 
          available?.station_id === station?.station_id
          )
          station.availabilities = stationAvailable
          return station
    })
    setStationsWithAvailabilities(stationsWithAvailabilities)
  }

  const fetchData = () => {
    const stations = axios.get('https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json')
    const availabilities = axios.get('https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json')
    const system = axios.get('https://gbfs.urbansharing.com/oslobysykkel.no/system_information.json')
      .then((res) => {
        setSystemInfo(res.data.data)
    })
    
    const combinedStationsAvailabilities = axios.all([stations, availabilities])
      .then(axios.spread((...allData) => {
        getStationsWithAvailabilities(allData)
      })).catch((err) => { console.log(err) });
    
  }

  useEffect(async() => {
    fetchData()
  }, [])

  console.log(systemInfo)

  return (
    <AppContainer>
      <AppHeader>
        <h2>Oslo Bysykkel tilgjengelighet</h2>
        <p>Sist oppdatert den {new Date(stationsWithAvailabilities[0]?.availabilities?.last_reported * 1000).toLocaleDateString("no-NO")}</p>
      </AppHeader>
      <AppBody>
          <StationContainer>
            <StationsList
              stationsWithAvailabilities={stationsWithAvailabilities}
            />
          </StationContainer>
          <Sidebar>
          <h3>{systemInfo?.operator}</h3>
          <p>{systemInfo?.name}</p>
          <p>{systemInfo?.email}</p>
          <p>{systemInfo?.phone_number}</p>
          <h4>Last ned mobil Apper</h4>
          <AppDownload>
            <a href={systemInfo?.rental_apps?.android?.store_uri} target="_blank">
              <img src="https://mohnackycarlsbad.com/wp-content/uploads/2016/11/googleplaystore.png"
              />
            </a>
            <a href={systemInfo?.rental_apps?.ios?.store_uri} target="_blank">
              <img src="https://fosenenergi.no/wp-content/uploads/2020/09/app-store-logo.png"
              />
            </a>
          </AppDownload>
          </Sidebar>
      </AppBody>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  //margin: 20px;
`;
const AppHeader = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  z-index: 10;
  background-color: #fff;
  > h2{
    padding: 20px;
    color: #555;
  }
  > p{
    font-size: 14px;
    font-style: italic;
    padding: 20px;
  }
`;
const AppBody = styled.div`
  position: relative;
  top: 90px;
  width: 100%;
  display: flex;
`;
const Sidebar = styled.div`
  flex: 0.2;
  background-color: #E0F2FF;
  margin: 10px 20px 0 0;
  padding: 20px;
  height: 220px;
  border-radius: 5px;
  > p{
    padding-bottom: 5px;
  }
  > h3 {
    margin-bottom: 10px;
  }
  > h4{
    margin-top: 15px;
  }
`;
const StationContainer = styled.div`
    flex: 1;
`;

const AppDownload = styled.div`
  display: flex;
  align-items: center;
  > a {
    >img{
      width: 140px;
      margin-top: 20px;
    }
  }
`;
