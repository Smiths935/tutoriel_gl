import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { COULEURS } from "../Constante/Couleur";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const Intro = () => {
  const navigation = useNavigation();
  const { width: SCREEN_WIDTH } = useWindowDimensions();


  const navigations = (page) => {
    switch (page) {
      case (page = 3):
        navigation.navigate("Login");
        break;
      case (page = 2):
        navigation.navigate("Register");
        break;
      default:
        navigation.navigate("ParticipeReunion");
        break;
    }
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../animation/img2.json")}
        style={{
          width: SCREEN_WIDTH * 0.9,
          height: SCREEN_WIDTH * 0.9,
          marginBottom: "70%",
        }}
        autoPlay
        loop
      />
      <View style={styles.contentBtn}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Bienvenue
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 17,
            color: COULEURS.simpleText,
            marginVertical: 10,
          }}
        >
          Prise en main de votre compte
        </Text>
        <TouchableOpacity
         onPress={()=>navigations(1)}
          style={[styles.btn, { backgroundColor: COULEURS.primary }]}
        >
          <Text style={[styles.textBtn, { color: COULEURS.white }]}>
            Participer à une réunion
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} 
        onPress={()=>navigations(2)}>
          <Text style={styles.textBtn}>S'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}
         onPress={()=>navigations(3)}>
          <Text style={styles.textBtn}>Connexion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COULEURS.primary,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  contentBtn: {
    padding: 25,
    backgroundColor: COULEURS.white,
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "absolute",
    bottom: 0,
  },
  btn: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "#F5F5F5",
    borderRadius: 30,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  textBtn: {
    fontSize: 15,
    fontWeight: "500",
  },
});
