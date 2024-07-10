import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COULEURS } from "../Constante/Couleur";
import { useNavigation, useRoute } from "@react-navigation/native";

const Register = () => {
  const route = useRoute();
  const navigation = useNavigation();
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
      <View style={{ paddingVertical: 30 }}>
        <Text style={{ marginLeft: 10, marginBottom: 7 }}>
          Entrez votre adresse Email et votre Mot de passe
        </Text>
        <View>
          <TextInput
            placeholder="Enter votre Email"
            placeholderTextColor={COULEURS.simpleText}
            style={styles.inputText}
          />
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: COULEURS.inactiveBtn,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 10,
              borderRadius: 10,
              marginTop: 20,
            }}
          >
            <Text style={{ color: "black", fontSize: 18 }}>S'inscrire</Text>
          </TouchableOpacity>
          <View
            style={{
              marginVertical: 20,
              alignSelf: "flex-start",
            }}
          >
            <Text>
              {" "}
              En continuant, j'accepte la
              <Text style={styles.textBlue}>
                {" "}
                Declaration de confidentialite
              </Text>{" "}
              et les
              <Text style={styles.textBlue}>
                {" "}
                Condition Generales du service de Zoom
              </Text>
            </Text>
          </View>

          <Text
            style={{
              fontSize: 17,
              color: COULEURS.simpleText,
              marginVertical: 20,
            }}
          >
            OU SELECTIONNEZ VOTRE METHODE D'INSCRIPTION
          </Text>
        </View>
        <View style={{ paddingHorizontal: 30, paddingVertical: 5 }}>
          <TouchableOpacity style={styles.contentBtn}>
            <MaterialCommunityIcons
              name="google"
              size={30}
              color={COULEURS.danger2}
            />
            <Text style={styles.textBtn}>Continuer avec google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentBtn}>
            <MaterialCommunityIcons name="apple" size={30} />
            <Text style={styles.textBtn}>Continuer avec google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentBtn}>
            <MaterialCommunityIcons
              name="facebook"
              size={30}
              color={COULEURS.primary}
            />
            <Text style={styles.textBtn}>Continuer avec google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentBtn}>
            <MaterialCommunityIcons
              name="key-variant"
              size={30}
              color={COULEURS.simpleText}
            />
            <Text style={styles.textBtn}>Continuer avec google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;

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
    marginBottom: 3,
    paddingLeft: 25,
    paddingRight: 20,
  },
  contentBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: COULEURS.white,
    borderRadius: 30,
    padding: 10,
  },
  textBtn: {
    flexGrow: 1,
    marginLeft: 25,
  },
  textBlue: {
    color: COULEURS.primary,
    fontWeight: "500",
  },
});
