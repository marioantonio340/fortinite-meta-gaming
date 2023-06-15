import styled from "styled-components/native";


export const Card = styled.View`
    flex-direction: row;
    margin: 10px;
    border-radius: 5px;
    background-color: #fff;

`;

export const Image = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 5px;`;

export const Details = styled.View`
    flex: 1;
    padding: 10px;`;

export const Name = styled.Text`
    font-family: 'Burbank';
    text-transform: uppercase;
    font-size: 18px;
    margin-bottom: 5px;`;

export const Description = styled.Text`
    font-family: 'Burbank';
    font-size: 14px;
    margin-bottom: 5px;`;

export const Dps = styled.Text`
    color: red;
    text-transform: uppercase;
    font-family: 'Burbank';
    font-size: 14px;`;

export const Cure = styled.Text`
    color: #05C7F2;
    text-transform: uppercase;
    font-family: 'Burbank';
    font-size: 14px;`;

