import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { COULEURS } from "../Constante/Couleur";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import OTPEntry, { OtpInput } from "react-native-otp-entry";

const VerificationEmail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [code, setCode] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
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
      <View
        style={{ height: 200, alignItems: "center", justifyContent: "center" }}
      >
        <Text>
          Pour vous connecter, verifier votre adresse e-mail ( email@gmail.com)
          et entrez le code de verification
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
        }}
      >
        <OtpInput numberOfDigits={6} onTextChange={(text) => setCode(text)} />
      </View>
      <View style={{padding:30,paddingTop:50}}>
        <TouchableOpacity
        onPress={()=>navigation.navigate("Home")}
          style={{
            backgroundColor: COULEURS.primary,
            justifyContent:"center",
            alignItems:"center",
            borderRadius:20,
            padding:15
          }}
        >
          <Text style={{color:COULEURS.white,fontSize:17}}>Verification</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          padding: 20,
          flexDirection: "row",
        }}
      >
        <Text>Vous n'avez pas obtenu le code ? </Text>
        <TouchableOpacity>
          <Text style={{ color: COULEURS.primary }}>Renvoyer le code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerificationEmail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COULEURS.white2,
    position: "relative",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 23,
    paddingVertical: 20,
    backgroundColor: COULEURS.primary,
  },
  input: {
    width: 40,
    height: 50,
    backgroundColor: "#999",
    alignItems: "center",
    justifyContent: "center",
    color: COULEURS.primary,
    textAlign: "center",
  },
});
