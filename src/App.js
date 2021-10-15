import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {
  AppContainer,
  AppHeader,
  AppBody,
  Footer,
  StationContainer,
  FooterRight,
  DownloadImage,
  FooterOperator,
  AppHeaderTimestamp,
  FooterContent,
  AppHeaderTitle,
  DownloadLink,
  DownloadTitle,
  FooterLeft,
  DownloadIcons
} from './Styles/AppElements'
import StationsList from './components/StationsList'

const App = () => {
  const [stationsWithAvailabilities, setStationsWithAvailabilities] = useState([])
  const [stationsWithAvailabilitiesChunked, setStationsWithAvailabilitiesChunked] = useState([])
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

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (stationsWithAvailabilities.length > 0) {
      while (stationsWithAvailabilities.length > 0) {
          stationsWithAvailabilitiesChunked.push(stationsWithAvailabilities.splice(0, 5))
      }
    }
  }, [stationsWithAvailabilities])

  return (
    <AppContainer>
      <AppHeader>
        <AppHeaderTitle>Oslo Bysykkel tilgjengelighet</AppHeaderTitle>
        <AppHeaderTimestamp>Sist oppdatert den {new Date(stationsWithAvailabilitiesChunked[0]?.[0]?.availabilities?.last_reported * 1000).toLocaleDateString("no-NO")}</AppHeaderTimestamp>
      </AppHeader>
      <AppBody>
          <StationContainer>
            <StationsList
              stationsWithAvailabilities={stationsWithAvailabilitiesChunked}
            />
          </StationContainer>
        <Footer>
          <FooterLeft>
            <FooterOperator>{systemInfo?.operator}</FooterOperator>
            <FooterContent>{systemInfo?.name}</FooterContent>
            <FooterContent>{systemInfo?.email}</FooterContent>
            <FooterContent>{systemInfo?.phone_number}</FooterContent>
          </FooterLeft>
          <FooterRight>
            <DownloadTitle>Last ned mobil Apper</DownloadTitle>
            <DownloadIcons>
              <DownloadLink href={systemInfo?.rental_apps?.android?.store_uri} target="_blank">
                <DownloadImage src="https://mohnackycarlsbad.com/wp-content/uploads/2016/11/googleplaystore.png"
                />
              </DownloadLink>
              <DownloadLink href={systemInfo?.rental_apps?.ios?.store_uri} target="_blank">
                <DownloadImage src="https://fosenenergi.no/wp-content/uploads/2020/09/app-store-logo.png"
                />
              </DownloadLink>
            </DownloadIcons>
          </FooterRight>
          </Footer>
      </AppBody>
    </AppContainer>
  )
}

export default App


