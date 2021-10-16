import styled from 'styled-components'

export const StationContainer = styled.div`
    height: 100px;
    background-color: transparent;
    margin: 10px 20px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.25);
    opacity: 0.8;
    transition: all 0.5ms ease-in-out;
    :hover{
        opacity: 1;
        transition: all 0.5ms ease-in-out;
        background-color: #530000;
    }
`;
export const StationName = styled.h3`
    color: #fff;
    margin-bottom: 10px;
`;
export const StationContent = styled.p`
    margin-bottom: 5px;
    font-size: 16px;
    color: #fff;
    font-weight: 500;
`;
export const StationContentValue = styled.span`
    font-size: 14px;
    font-weight: normal;
    font-style: italic;
`;