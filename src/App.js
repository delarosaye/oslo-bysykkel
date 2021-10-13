import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {
  AppContainer,
  AppHeader,
  AppBody,
  Sidebar,
  StationContainer,
  AppDownload,
  DownloadImage,
  SidebarOperator,
  AppHeaderTimestamp,
  SidebarContent,
  AppHeaderTitle,
  DownloadLink,
  DownloadTitle
} from './Styles/AppElements'
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
        <AppHeaderTitle>Oslo Bysykkel tilgjengelighet</AppHeaderTitle>
        <AppHeaderTimestamp>Sist oppdatert den {new Date(stationsWithAvailabilities[0]?.availabilities?.last_reported * 1000).toLocaleDateString("no-NO")}</AppHeaderTimestamp>
      </AppHeader>
      <AppBody>
          <StationContainer>
            <StationsList
              stationsWithAvailabilities={stationsWithAvailabilities}
            />
          </StationContainer>
          <Sidebar>
          <SidebarOperator>{systemInfo?.operator}</SidebarOperator>
          <SidebarContent>{systemInfo?.name}</SidebarContent>
          <SidebarContent>{systemInfo?.email}</SidebarContent>
          <SidebarContent>{systemInfo?.phone_number}</SidebarContent>
          <DownloadTitle>Last ned mobil Apper</DownloadTitle>
          <AppDownload>
            <DownloadLink href={systemInfo?.rental_apps?.android?.store_uri} target="_blank">
              <DownloadImage src="https://mohnackycarlsbad.com/wp-content/uploads/2016/11/googleplaystore.png"
              />
            </DownloadLink>
            <DownloadLink href={systemInfo?.rental_apps?.ios?.store_uri} target="_blank">
              <DownloadImage src="https://fosenenergi.no/wp-content/uploads/2020/09/app-store-logo.png"
              />
            </DownloadLink>
          </AppDownload>
          </Sidebar>
      </AppBody>
    </AppContainer>
  )
}

export default App


