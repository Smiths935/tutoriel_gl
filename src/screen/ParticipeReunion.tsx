import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COULEURS } from "../Constante/Couleur";
import { useNavigation, useRoute } from "@react-navigation/native";

const ParticipeReunion = () => {
  const route = useRoute();
  const navigation = useNavigation()
  const [switchSon,setSwitchSon] = useState(false)
  const [switchArretVideo,setSwitchArretVideo] = useState(false)

  const toggleChangeSon=(value)=>{
    setSwitchSon(value)
  }
  const toggleChangeVideo=(value)=>{
    setSwitchArretVideo(value)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <MaterialCommunityIcons
            style={{
              marginRight: 40,
            }}
            name="arrow-left-drop-circle-outline"
            size={35}
            color={COULEURS.white}
          />
        </TouchableOpacity>
        <Text style={{ color: COULEURS.white, fontSize: 22, flexGrow: 1 }}>
          {route.name}
        </Text>
      </View>
      <View style={{ paddingVertical: 40 }}>
        <TextInput
          placeholder="Enter l'ID"
          placeholderTextColor={COULEURS.simpleText}
          style={styles.inputText}
        />
        <Text style={styles.model}>Google pixel 4</Text>
        <View
          style={{
            marginVertical: 20,
            paddingHorizontal: 10,
            alignSelf: "flex-start",
          }}
        >
          <Text>
            {" "}
            En cliquant sur "participer", vous acceptez nos
            <Text style={styles.textBlue}> Conditions d'utilisation</Text> et
            notre
            <Text style={styles.textBlue}> Declaration de confidentialite</Text>
          </Text>
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: COULEURS.inactiveBtn,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 10,
              borderRadius: 10,
            }}
          >
            <Text style={{ color:"black",fontSize:18}}>Participer</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginVertical: 20,
            paddingHorizontal: 10,
            alignSelf: "flex-start",
          }}
        >
          <Text>
            {" "}
           Si vous avez recu un lien d'invitation, appuyer sur le lien pour participer à la réunion 
          </Text>
        </View>
        <View>
            <Text style={{marginLeft:10,marginBottom:10}}>Option de participation</Text>
            <View style={styles.optionContent}>
                <Text>Ne pas connecter au saon</Text>
                <Switch style={{
                    height:60,width:60  
                }} onValueChange={toggleChangeSon} value={switchSon}/>
            </View>
            <View style={styles.optionContent}>
                <Text>Ne pas connecter au saon</Text>
                <Switch style={{
                    height:60,width:60  
                }} onValueChange={toggleChangeVideo} value={switchArretVideo}/>
            </View>
        </View>

      </View>
    </View>
  );
};

export default ParticipeReunion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COULEURS.white2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 23,
    paddingVertical: 20,
    backgroundColor: COULEURS.primary,
  },
  inputText: {
    width: "100%",
    textAlign: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    color: COULEURS.primary,
    marginBottom: 20,
    paddingLeft: 25,
    paddingRight: 20,
  },
  model: {
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    backgroundColor: COULEURS.white,
    paddingVertical: 15,
    color: "black",
    fontSize: 20,
  },
  textBlue: {
    color: COULEURS.primary,
    fontWeight: "500",
  },
  optionContent:{
    flexDirection:"row",
    width:"100%",
    backgroundColor:COULEURS.white,
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:20,marginBottom:1
  }
});
