import styled from "styled-components/native";
import {pallete} from "../theme/colors/fortnitepalete";
import {StyleSheet} from "react-native";

export const Nav = styled.Tab.Navigator`
    background-color: ${pallete.primary_500} ;
`

export const Tab = StyleSheet.create({
    tabBar: {
      backgroundColor: '#191b28',
      borderTopWidth: 1,
      borderTopColor: '#121212',
      height: 60,
      justifyContent: 'center',
    },
    tabBarLabel: {
      fontFamily: 'Burbank',
      fontSize: 14,
      marginTop: 2,
    },
  });