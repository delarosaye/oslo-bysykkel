import styled from 'styled-components'

export const StationContainer = styled.div`
    height: 100px;
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
`;
export const StationName = styled.h3`
    color: #222;
    margin-bottom: 10px;
`;
export const StationContent = styled.p`
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 500;
`;
export const StationContentValue = styled.span`
    font-size: 14px;
    font-weight: normal;
    font-style: italic;
`;