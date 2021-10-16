import styled from 'styled-components'

export const AppContainer = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #350000;
    margin-left: auto;
    margin-right: auto;
    //margin: 20px;
    @media screen and (max-width: 1200px){
        width: 100%;
    }
    `;
export const AppHeader = styled.div`
    position: fixed;
    display: flex;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    z-index: 10;
    background-color: #1A0000;
    @media screen and (max-width: 700px){
        flex-direction: column;
        align-items: center;
    }
    @media screen and (max-width: 1200px){
        width: 100%;
    }
`;
export const AppHeaderTitle = styled.h2`
    padding: 20px;
    margin-left: 20px;
    color: #fff;
    font-size: 28px;
`;
export const AppHeaderTimestamp = styled.p`
    font-size: 14px;
    font-style: italic;
    padding: 20px;
    margin-right: 20px;
    color: #fff;
    @media screen and (max-width: 700px){
        padding: 0px 0 30px 0;
    }
`;
export const AppBody = styled.div`
    position: relative;
    top: 90px;
    width: 100%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 700px){
        top: 120px;
    }
    `;
export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #1A0000;
    margin-top: 10px;
    padding: 40px;
    height: 100px;
    border-radius: 5px;
    @media screen and (max-width: 700px){
        flex-direction: column;
        height: fit-content;
        align-items: center;
    }
`;
export const FooterOperator = styled.h3`
    margin-bottom: 10px;
    color: #fff;
`;
export const FooterContent = styled.p`
    padding-bottom: 5px;
    color: #fff;
`;
export const StationContainer = styled.div`
    flex: 1;
    `;
export const FooterLeft = styled.div`
`;
export const FooterRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const DownloadIcons = styled.div`
    display: flex;
    align-items: center;
    opacity: 0.6;
    transition: all 0.5ms ease-in-out;
    &:hover {
        transition: all 0.5ms ease-in-out;
        opacity: 1;
    }
`;
export const DownloadTitle = styled.h4`
    margin-top: 5px;
    color: #fff;
    @media screen and (max-width: 700px){
        margin-top: 25px;
    }
`;
export const DownloadLink = styled.a`
`;

export const DownloadImage = styled.img`
    width: 140px;
    margin-top: 20px;
`;
