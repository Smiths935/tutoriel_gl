import 'react-native-gesture-handler'
import {StyleSheet, StatusBar } from "react-native";
import NavigationStack from "./Navigation/NavigationStack";
import { COULEURS } from './src/Constante/Couleur';

export default function App() {
  return(
    <>
    <StatusBar barStyle="default" backgroundColor={COULEURS.primary}/>
    <NavigationStack/>
    </> 
    )
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
