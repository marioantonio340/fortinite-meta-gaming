import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome';


export const Container = styled.View`
    align-items: center;
    justify-content: space-around;
    flex-direction:column;
    
    flex: 1;`

export const Title = styled.Text`  
    font-family: 'Burbank';
    font-size: 50px;`


export const Card = styled.View`
  background-color: #FFFFFF;
  width: 90%;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  flex-direction: column;
`;

export const Name = styled.Text`
  font-family: 'Burbank';
  text-transform: uppercase;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  width: 90%;
  background-color: #05C7F2;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  font-family: 'Burbank';
  text-transform: uppercase;
  color: #FFFFFF;
  font-size: 16px;

`;

export const GithubButton = styled.TouchableOpacity`
  justify-content: center;
  width: 90%;
  margin: 10px;
  background-color: #333333;
  padding: 10px;
  border-radius: 5px;
  flex-direction: row;
`;

export const GithubButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 16px;
  font-family: 'Burbank';
  text-transform: uppercase;
`;
export const AdIcon = styled(Icon).attrs({
    name: 'bullhorn',
    size: 20,
    color: '#FFFFFF',
    marginRight: 10
  })``;
  
  export const GithubIcon = styled(Icon).attrs({
    name: 'github',
    size: 20,
    color: '#FFFFFF',
    marginRight: 10
  })``;

  export const styles ={

    dropdown: {
        height: 40,
        backgroundColor: '#fafafa',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    dropdownText: {
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#333',
        fontFamily: 'Burbank',
        textAlign: 'center',
    },
    container: {
        width: '90%',
    },

};